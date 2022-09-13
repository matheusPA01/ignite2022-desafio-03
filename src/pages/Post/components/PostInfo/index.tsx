import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PostHeaderSpan, PostInfoContainer, PostInfoFooter, PostInfoHeader } from "./styles"

import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostProps } from "../.."
import { FormatTimePassed } from "../../../../utils/formatter"
import { Spinner } from "../../../../components/Spinner"
import { NavLink } from "react-router-dom"

interface PostInfoProps {
  post: PostProps
  isLoading: boolean
}

export function PostInfo({ post, isLoading }: PostInfoProps) {
  return (
    <PostInfoContainer>
      {isLoading ? (<Spinner />) : (
        <>
          <PostInfoHeader>
            <PostHeaderSpan variant="right">
              <NavLink to="/">
                <FontAwesomeIcon icon={faChevronLeft} /> Voltar
              </NavLink>
            </PostHeaderSpan>

            <PostHeaderSpan variant="left">
              <a href={post.url} target="_blank">ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </PostHeaderSpan>

          </PostInfoHeader>

          <h2>{post.title}</h2>

          <PostInfoFooter>
            <span>
              <FontAwesomeIcon icon={faGithub} /> {post.user}
            </span>

            <span>
              <FontAwesomeIcon icon={faCalendarDay} /> {FormatTimePassed(post.updatedAt)}
            </span>

            <span>
              <FontAwesomeIcon icon={faComment} /> {post.comments} comentários
            </span>
          </PostInfoFooter>
        </>
      )}

    </PostInfoContainer>
  )
}