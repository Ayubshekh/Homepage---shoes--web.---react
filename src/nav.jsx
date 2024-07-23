import "./App.css"


export default function Nav(){
    return(
        <nav>
        <div className="logo">
            <img src="/image/brand_logo.png" alt="logo"></img>
        </div>

        <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
        </ul>

        <button>Login</button>
        </nav>
    )
}