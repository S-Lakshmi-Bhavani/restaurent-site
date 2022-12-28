import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Events from './Events'
import logo from './pro/lo4.png'
import './Header.css'
import About from './About.js'
import Book from './BookTable.js'
import Contact from './Contact.js'
import Login from './Login.js'
import Signup from './Signup'
function Header() {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-light" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#"><img className='logo' src={logo} alt="###" /></Link>
                        {/* <Link className="navbar-brand" to="#"></Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                                <li className="nav-item">
                                    <Link className="nav-link active text-dark " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark " to="/menu">Menu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark " to="/events">Events</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-dark " to='/about'>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to='/contact'>Contact us</Link>
                                </li>
                            </ul>
                            <form className="d-flex">

                                <Link to='/booktable'> <button className="btn btn-outline-success m-2" type="">Book a Table</button></Link>
                                <Link to='/login'> <button className="btn btn-outline-success m-2 " type="">Login</button></Link>
                            </form>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/menu' element={<Menu />}></Route>
                    <Route path='/events' element={<Events />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/booktable' element={<Book />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Header