import "./topbar.scss"
//import {Person, Mail, LinkedIn, Home, GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                    <div className="logo">
                   <a href="#intro">
                    <img src="assets/home.png" alt="" />
                    </a>
                    </div>
                    
                    <div className="linkedin" onClick={()=>window.open("https://www.linkedin.com/in/mahaboob-shariff-511475193/")}>
                        <img src="assets/linked1.png" alt="" />  
                    </div>   

                    <div className="github" onClick={()=>window.open("https://github.com/crpto-bug")}>
                        <img src="assets/git.png" alt="" />
                    
                    </div>    
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1" ></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
    
            </div>
        </div>
        
    )
}
