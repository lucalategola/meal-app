import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/detail/1">Contact</Link>
    </div>
  )
}

export default About
