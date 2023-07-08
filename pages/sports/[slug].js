import { createClient } from 'contentful'
import Image from 'next/image'

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: 'sports' 
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
    props: { sport: items[0] }
  }

}

export default function SportsDetails({ sport }) {
  console.log(sport);
  if(!sport) return <Skeleton/>
  const { image, name, players, country } = sport.fields;
  
  return (
    <div>
      <div className="banner">
        <Image 
          src={'https:' + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          alt='Sports picture'
        />
        <h2>{ name }</h2>
      </div>

      <div className="info">
        <p>Takes about { players } players to play</p>
        <h3>{country}</h3>
        
      </div>

      <style jsx>
        {`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}