import './portfolio.scss';
import PortfolioList from '../Portfoliolist/PortfolioList';
import { useState } from 'react';
import {
    featuredPortfoilio,
    webPortfolio,
    docPortfolio,
    gamePortfolio,
} from "../../data";
import { useEffect } from 'react';

export default function Portfolio() {

    const [selected, setSelected] = useState("feature");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "feature",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "pdf",
            title: "miniCVGen",
        },
        {
            id: "game",
            title: "Game",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "feature":
                setData(featuredPortfoilio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "pdf":
                setData(docPortfolio);
                break;
            case "game":
                setData(gamePortfolio);
                break;
            default:
                setData(featuredPortfoilio);
        }
    },[selected]);





    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=> (
                    <PortfolioList 
                    title={item.title} 
                    active={selected == item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
                </ul>
            <div className="container">
                {data.map((d)=> (
                    <div className="item">
                    <img
                    src={d.img}
                    />
                    <h3>{d.title}</h3>
                    </div>
                ))}
                
            </div>
        </div>
    );
}
