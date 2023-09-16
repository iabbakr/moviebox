import React from 'react';
import Menu from './image/Menu.png';
import Tv from './image/tv.png';
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="frag">
            <div className="header">
                <div className="nav">
                    <div className='nav-item a'>
                        <img src={Tv} className="imG"/>
                        <h4>MovieBox</h4>
                    </div>
                    <div className='nav-item b'>
                        <input 
                        type="text" className="search" placeholder='what do you want to watch?'/>
                    </div>
                    <div className='nav-item c'>
                        <h5>Sign in</h5>
                        <img src={Menu} className="imG"/>
                    </div>
                </div>
                <div className="hero">
                    
                    <div className="mtitle">
                        <h2>John Wick 3: Parabellum</h2>
                        <div className="mreview">
                            <span className="rev"></span>
                            <span className="rev"></span>
                            <span className="rev"></span>
                        </div>
                        <p className="msummary">John Wick is on the run after killing a member of the international assassins guild and with a $12 million price tag on his head, he is the target of hit men and women everywhere</p>
                        <button><Link to="/watch">WATCH TRAILER</Link></button>

                    </div>

                    
                </div>
                
                
            </div>
        </div>
        

    )
}