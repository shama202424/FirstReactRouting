import Footer from "../Footer/footer";
import Nav from "../Nav/Nav";
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Nav/>
<Outlet></Outlet>
      <Footer/>
    </div>
  )
}
