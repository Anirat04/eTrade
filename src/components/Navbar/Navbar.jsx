import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const navLinks = <>
    <NavLink className="navHoverClass" to="/">Home</NavLink>
    <NavLink className="navHoverClass" to="/addProduct">Add Product</NavLink>
    <NavLink className="navHoverClass" to="/mycarts">My Cart</NavLink>
</>


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-[1320px] mx-auto py-[20px]">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> */}
                    <Link>
                        <img src="https://i.ibb.co/NNfWNY5/logo.webp" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="nav-active menu menu-horizontal px-1 text-[20px] font-bold gap-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login">
                        <a className="btn">Button</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;