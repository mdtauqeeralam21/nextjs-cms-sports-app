import { createClient } from "contentful"
import SportsCard from "@/components/SportsCard"
export async function getStaticProps() {

  // The createClient function makes a connection to the ContentfulCMS
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "sports" })

  return {
    props: {
      sports: res.items,
    }
  }
}

export default function Home({ sports }) {
  console.log(sports)

  return (
    <>
    <h1>Welcome to Sports Blog</h1>
    <div className="recipe-list">
      {sports.map(sport => (
        <SportsCard key={sport.sys.id} sports={sport} />
      ))}

<style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
          border: 1px solid black;
          padding-left:15px;
        }
      `}</style>
    </div>
    </>
  )
}