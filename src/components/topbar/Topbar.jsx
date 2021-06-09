import "./topbar.scss";
import {Person,Mail,LinkedIn,GitHub} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Ritik.UI</a>
                    <div className="container">
                        <Person className="icon"/>
                        <span>89 721 88 185</span>
                    </div>
                    <div className="container">
                        <Mail className="icon"/>
                        <span>rraj02668@gmail.com</span>
                    </div>
                    <div className="container">
                        <LinkedIn className="icon"/>
                        <span>https://www.linkedin.com/in/ritikraj01/</span>
                    </div>
                    <div className="container">
                        <GitHub className="icon"/>
                        <span>https://github.com/vintagecodes</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
