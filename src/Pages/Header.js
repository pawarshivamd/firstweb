
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header>
    <div className='col-2 logo'><img src={require('../asstes/img/1.avif')} alt="" />logo</div>
        <nav>
        <ul>
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/about"> About </NavLink></li>
            <li><NavLink to="/blog"> Blog </NavLink></li>
            <li><NavLink to="/contact"> Contact </NavLink></li>
        </ul>
        </nav>
        </header>
    </>
  )
}

export default Header
