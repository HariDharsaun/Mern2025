import { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {

    var[dropdown,showDropdown] = useState(false)

    const toggleDropdown = () =>{
        showDropdown(!dropdown)
    }

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/gallery' className="link">Gallery</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                    <div>
                        <span onMouseEnter={toggleDropdown} className="link">Hooks</span>
                        {dropdown && (
                            <div className="hookdd" onMouseLeave={toggleDropdown}>
                                <ul>
                                    <li><Link to='/usestate' className="ddlink">useState</Link></li>
                                    <li><Link to='/useeffect' className="ddlink">useEffect</Link></li>
                                    <li><Link to='/useref' className="ddlink">useRef</Link></li>
                                    <li><Link to='/usememo' className="ddlink">useMemo</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <li><Link to='/signup' className="link">Signup</Link></li>
                </ol>
            </nav>
        </header>
    )
}

export default Navbar