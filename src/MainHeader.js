
import Header from './Pages/Header'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainHeader
