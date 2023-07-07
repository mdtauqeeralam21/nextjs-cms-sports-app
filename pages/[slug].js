import { createClient } from 'contentful'

const client = createClient({
    space: 'v7bj7er35m23',
    accessToken: '2c7ZpJHrr2wv9bnr1jbYgbQTzqO_Wn5HYTap5EXicCU'
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "sports" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'sports',
    'fields.slug': params.slug
  })

  return {
    props: { sports: items[0] }
  }

}

export default function RecipeDetails({ sports }) {
  console.log(sports)
  
  return (
    <div>
      Recipe Details
    </div>
  )
}