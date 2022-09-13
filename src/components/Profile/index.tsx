import { ProfileBody, ProfileContainer, ProfileFooter, ProfileInfo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface GithubProfileProps {
  name: string
  bio: string
  url: string
  login: string
  image: string
  followers: number
  company: string
}

export function Profile() {

  const username = import.meta.env.VITE_GITHUB_USERNAME

  const [githubProfile, setGithubProfile] = useState<GithubProfileProps>({} as GithubProfileProps)

  const [isLoading, setIsLoading] = useState(true)

  const userProfile = useCallback(async () => {
    try {
      const response = await api.get(`users/${username}`)

      const newUserProfile = {
        name: response.data.name,
        bio: response.data.bio,
        url: response.data.html_url,
        login: response.data.login,
        image: response.data.avatar_url,
        followers: response.data.followers,
        company: response.data.company
      }

      setGithubProfile(newUserProfile)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    userProfile()
  }, [])

  return (
    <ProfileContainer>
      <ProfileInfo>
        <img src={githubProfile.image} />
        <ProfileBody>
          <header>
            <h3>{githubProfile.name}</h3>
            <div>
              <a target="_blank" href={githubProfile.url}>
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </header>
          <p>{githubProfile.bio}</p>
          <ProfileFooter>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {githubProfile.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {githubProfile.company ? githubProfile.company : 'Nenhuma'}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {githubProfile.followers} seguidores
            </span>
          </ProfileFooter>
        </ProfileBody>
      </ProfileInfo>
    </ProfileContainer>
  )
}