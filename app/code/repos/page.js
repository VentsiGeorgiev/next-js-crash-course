import Link from "next/link"

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/VentsiGeorgiev/repos')
  const repos = await response.json()

  return repos
}

async function ReposPage() {
  const repos = await fetchRepos()
  console.log(repos)

  return (
    <div>
      <h1>ReposPage</h1>
      <ul>
        {repos.map((r) => (
          <li key={r.id}>
            <Link href={`/code/repos/${r.name}`}>
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage