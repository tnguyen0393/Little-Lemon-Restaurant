import logo from "./assets/LittleLemonLogo.svg";

const Navbar = () => {
    return (
        <>
            <img src={logo}/>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservation</a></li>
                <li><a>Online Order</a></li>
                <li><a>Login</a></li>
            </ul>
        </>
    )
}

export default Navbar;