import Link from "next/link"

async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/VentsiGeorgiev/${name}`)
  const data = response.json()
  return data
}

async function Repo({ name }) {
  const repo = await fetchRepo(name)
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Description:</strong> {repo.description}</p>
      <div>
        <Link href='/code/repos'>Back to repos</Link>
      </div>
    </div>
  )
}

export default Repo