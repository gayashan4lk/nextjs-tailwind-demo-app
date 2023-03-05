import CityData from '@/components/city-data/CityData'
import { displayValue } from '@tanstack/react-query-devtools/build/lib/utils'

type Props = {
  params: {
    id: string
  }
}

interface City {
  cityId: number
  name: string
  description: string
}

interface PointOfInterest {
  pointOfInterest: number
  name: string
  description: string
}

interface CityWithPointOfInterest extends City {
  pointsOfInterest: PointOfInterest[]
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function fetchCityWithoutPoI(id: string) {
  try {
    const city = await fetch(
      `https://127.0.0.1:7253/api/cities/${id}?isPointsOfInterestIncluded=false`
    )
    return (await city.json()) as City
  } catch (e) {
    console.error(e)
  }
}

async function fetchPost(id: string) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        cache: 'no-store',
      }
    )
    return (await res.json()) as Post
  } catch (e) {
    console.error(e)
  }
}

export default async function Page({ params: { id } }: Props) {
  const post = await fetchPost(id)
  const city = await fetchCityWithoutPoI(id)

  return (
    <>
      {post && (
        <div>
          <h1 className="text-xl">Post Info</h1>
          <h3 className="text-md font-bold">
            {post.id} : {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      )}

      {city && (
        <div>
          <h1 className="text-xl">City Info</h1>
          <h3 className="text-md font-bold">{city.name}</h3>
          <p>{city.description}</p>
        </div>
      )}
    </>
  )
}
