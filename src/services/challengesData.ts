import { gql, useQuery } from "@apollo/client"
import { challengeType } from "@type/challengesTypes"

const GET_ALL_CHALLENGES_QUERY = gql`
  query {
    challenges(orderBy: week_DESC, stage: PUBLISHED) {
      path
      week
      title
      figmaUrl
      imageSrc {
        url
      }
    }
  }
`

export function getChallenges() {
  const { data, loading, error } = useQuery<{
    challenges: Array<challengeType>
  }>(GET_ALL_CHALLENGES_QUERY, {
    fetchPolicy: "cache-first",
  })

  return { data, error, loading }
}
