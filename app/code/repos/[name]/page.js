import Repo from "@/app/components/Repo"

function RepoPage({ params: { name } }) {
  return (
    <div>
      <h1>Repo Page</h1>
      <Repo name={name} />
    </div>
  )
}

export default RepoPage