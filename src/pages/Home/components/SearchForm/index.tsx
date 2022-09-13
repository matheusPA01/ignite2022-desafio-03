import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  postLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchForm({ postLength, getPosts }: SearchFormProps) {
  const {
    register,
    handleSubmit
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h3>Publicações</h3>
        <span>{postLength} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}