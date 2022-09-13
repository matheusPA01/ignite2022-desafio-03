import { useCallback, useEffect, useState } from "react"
import { Profile } from "../../components/Profile"
import { Spinner } from "../../components/Spinner"
import { api } from "../../lib/axios"
import { FormatTimePassed } from "../../utils/formatter"
import { SearchForm } from "./components/SearchForm"
import { HomeContainer, PostList, PostCard } from "./styles"

export interface PostProps {
  title: string
  body: string
  created_at: string
  id: number
  url: string
  number: number
}

export function Home() {

  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPOSITORY

  const [posts, setPosts] = useState<PostProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPost = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repoName}`)

      setPosts(response.data.items)

    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPost()
  }, [])

  return (
    <HomeContainer>
      {isLoading ? (<Spinner />) : (
        <>
          <Profile />
          <SearchForm
            postLength={posts.length}
            getPosts={getPost}
          />

          <PostList>
            {posts.map(post => {
              return (
                <PostCard key={post.id} to={`post/${post.number}`}>
                  <div>
                    <strong>{post.title}</strong>
                    <span>{FormatTimePassed(post.created_at)}</span>
                  </div>

                  <p>{post.body}</p>
                </PostCard>
              )
            })}
          </PostList>
        </>
      )}
    </HomeContainer>
  )
}