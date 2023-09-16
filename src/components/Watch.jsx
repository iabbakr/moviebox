import React from 'react';
import { Link } from "react-router-dom";
import abu from './image/Poster.jpg';
import Ab from "./image/Abubakar.png";



export default function Watch(){
    return(
        <>
            <div className="movie-sec">
            <div className="aside">
                <div className="logobox">MovieBox</div>
                <div className="aside-info">Home</div>
                <div className="aside-info">Movies</div>
                <div className="aside-info">TV series</div>
                <div className="aside-info">Upcoming</div>
                <div className="quizs">
                    <h3>Play movies quizes and earn free tickets</h3>
                    <p>50K people are playing now</p>
                    <button>stop playing</button>
                </div>
                <div className="aside-info">Log out</div>

            </div>
            <div className="aseccc">
                <div className="trailer">
                    <img src={abu} className='babs'/>
                </div>
                <div className="trailer-info">
                    <p className="ptit"> John Wick</p>
                    <span>2023</span>
                    <span>PG-13</span>
                    <span>2h 10m</span>
                    <span className='cycle'>Action</span>
                    <span className='cycle'>Drama</span>
                    <span className='right'>rating and views</span>
                </div>
                <div className="downsec">
                    <div className="trailsummary">
                        <p className="psum">

After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.
                        </p>

                        <p className="ptit">Director: <span className="red">Joseph Kosinski</span></p>
                        <p className="ptit"> Writer: <span className="red">Jim cash</span></p>
                        <p className="ptit"> Stars: <span className="red">Tom cruise</span></p>
                        <div className="pbtn">
                            <button className='toprated'>Top rated movies #65</button>
                            <button className='awards'>Awards 9 nomination</button>
                        </div>

                    </div>
                    <div className="trailoptions">
                        <button className="btnsee one">See Showtimes</button>
                        <button className="btnsee two">More watch options</button>
                        <div className="optionShows">
                            <div className="movieOpt">
                                <img src={Ab} className="babss"/>
                                <img src={Ab} className="babss"/>
                                <img src={Ab} className="babss"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            
        </>
            
           
    )
}