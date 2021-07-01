import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"
import Particles from "react-particles-js"
import parti from "../animation/particle"; 
import "../../Global.scss"

export default function Intro() {
  const textRef = useRef();

   useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1000,
            backspeed: 50,
            strings: ["Competitive Coder.", "Cloud Enthusiast.","Tech Freak.", "Developer." ] })
    },[])

    return (
        
        <div className="animated-background">
       
        <Particles params={parti}/>
        <div className="intro" id="intro">
            <div className="left">
               <div className="imgContainer">
                   <img src="assets/pic.jpeg" alt="" />
               </div>
               <div class="glitch-txt" data-text="Mehaboob Shariff">Mehaboob Shariff</div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, my name is Mehaboob Shariff.</h2>
                    <h1>I study computer science @ NIT Silchar and I'm a</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
              
             </div>
        </div>
        </div>
    )
}
