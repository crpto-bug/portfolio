import "./Portfolio.scss"
import Portfoliolist from "../portfoliolist/Portfoliolist"
import { useEffect, useState } from "react"
import {featuredPortfolio,webPortfolio,others} from "../../data.js"

export default function Portfolio() {
 const [selected, setSelected] = useState("featured")
 const [data, setData] = useState([]); 
    const list= [
        {
            id: "featured",
            title: "Work"
        },
        {
            id: "web",
            title: "Projects"
        },
        {
            id: "others",
            title: "Courses"
        }
    ]

    useEffect(()=>{
      switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
          case "others":
            setData(others);
            break;
          default:
            setData(featuredPortfolio);
      }
    },[selected])
    return (
        <div className="Portfolio" id="portfolio">
             <h1>Experiences</h1>
    <ul>
     {list.map((item) => (<Portfoliolist 
     title={item.title} 
     active={selected===item.id} 
     setSelected={setSelected}
     id={item.id}
     />))}
    </ul>  
    <div className="container">
        {data.map((d) => (
        <div className="item" onClick={()=>window.open(d.URL)}>
            <img src={d.img} alt="" />
           <h3>{d.title}</h3>
        </div>
        ))}
    </div>
        </div>
    )
}
