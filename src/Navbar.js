import { Link } from 'react-router-dom';

//if we want intercept request to the server with react and handle
//the routing in the browser, we need to replace <a> with <Link>

const Navbar = () => { //sfc shortcut
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/authors">Authors</Link>
                <Link to="/create" > New Blog </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;