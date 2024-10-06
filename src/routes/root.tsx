import { Link } from "react-router-dom"

export default function Root() {
  return (
    <>
      <h1>Hello world</h1>
      <p>This is the root page</p>
      <Link to='/test' className="block">Test Link</Link>
      <Link to='/9485hg' className="block">Test Error Link</Link>
    </>
  )
}