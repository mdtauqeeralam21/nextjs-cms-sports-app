import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
                <h1>
              <span>Just about </span>
              <span> Some Good Sports</span>
            </h1>
            <h2>Spread The Joy</h2>
            </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2023 Just About Sports :)</p>
      </footer>
    </div>
  )
}