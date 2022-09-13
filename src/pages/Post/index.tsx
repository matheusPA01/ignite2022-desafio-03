import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostInfo } from "./components/PostInfo";
import { PostContainer, PostContent } from "./styles";

export interface PostProps {
  title: string
  body: string
  updatedAt: string
  comments: number
  url: string
  user: string
}

export function Post() {
  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPOSITORY

  const { id } = useParams()

  const [post, setPost] = useState<PostProps>({} as PostProps)
  const [isLoading, setIsLoading] = useState(true)

  const getFullPost = useCallback(async () => {
    try {
      const response = await api.get(`repos/${username}/${repoName}/issues/${id}`)

      const newPost = {
        title: response.data.title,
        body: response.data.body,
        updatedAt: response.data.updated_at,
        comments: response.data.comments,
        url: response.data.html_url,
        user: response.data.user.login,
      }

      setPost(newPost)

    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getFullPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo
        isLoading={isLoading}
        post={post}
      />

      <PostContent>
        <ReactMarkdown children={post.body} />
      </PostContent>
    </PostContainer>
  )
}