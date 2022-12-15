import { Link, useParams } from 'react-router-dom'

const Detail = () => {
  const { detailId } = useParams()

  return (
    <div>
      <h1>Detail {detailId}</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/detail/1">Contact</Link>
    </div>
  )
}

export default Detail
