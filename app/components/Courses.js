import Link from 'next/link'
import React from 'react'

async function fetchCourses() {
  const response = await fetch('http://localhost:3000/api/courses')
  const courses = await response.json()
  return courses
}

async function Courses() {

  const courses = await fetchCourses()

  return (
    <div>
      {courses.map((c) => (
        <div key={c.id}>
          <h3>{c.title}</h3>
          <p>Level: {c.level}</p>
          <p>{c.description}</p>
          <Link href={c.link} target="_blank">Go to course</Link>
        </div>
      ))}
    </div>
  )
}

export default Courses