import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
<Link to={"/"}>
<img className='imgFondo' src="../../instrumentos.png" alt="logo" />
</Link>
    </div>
  )
}

export default Header