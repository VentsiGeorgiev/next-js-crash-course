import Repo from "@/app/components/Repo"
import { Suspense } from "react"

function RepoPage({ params: { name } }) {
  return (
    <div>
      <h1>Repo Page</h1>
      <Suspense fallback={<h2>Loading repo...</h2>}>
        <Repo name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage