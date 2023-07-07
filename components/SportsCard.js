import Link from 'next/link'


export default function SportsCard({ sports }) {
  const { name, players, country } = sports.fields

  return (
    <div className="card">
      <div className="featured">
        {/* featured image */}
      </div>
      <div className="content">
        <div className="info">
          <h4>{ name }</h4>
          <p>number of players { players } </p>
          <h2>Country:{ country }</h2>
        </div>
        <div className="actions">
          {/* <Link href={'/recipes/' + slug}><a>Cook this</a></Link> */}
        {/*   <Link href={'sports/'+slug} legacyBehavior> This</Link> */}
        </div>
      </div>
    </div>
  )
}