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
      <p>{repos[0].name}</p>
    </div>
  )
}

export default ReposPage