import './intro.scss'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["with React.js!", "with Node.js", "with JavaScript"],
        });
    }, []);


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="assets/raj.png" alt="ritik"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ritik Raj Sharma</h1>
                    <h3>Web <span ref={textRef}></span></h3>
                </div>
            </div>

        </div>
    )
}
