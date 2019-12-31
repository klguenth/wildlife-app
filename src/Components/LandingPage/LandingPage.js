import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <section className="mainSection">
                    <h2 className="conserveQuote">
                        "In the end we will conserve only what we love; we will love only what we understand; we will understand only what we are taught." -Baba Dioum
                    </h2>
                    <div className="imgContainer">
                        <img src={'./Photos/humpback.jpeg'} alt="humpback whale"></img>
                    </div>
                    <div className="wwSummaries">
                        <div className="wwSummary1">
                            <h3>Get closer to the natural world.</h3>
                            <h4>Wildlife Watch provides a space to share and record wildlife sightings with the ultimate desire to foster curiousity and inspire conservation efforts around the world.</h4>
                        </div>
                        <div className="wwSummary2">
                            <h3>Simplistic Sightings</h3>
                            <h4>We provide a clean, stylized interface to record and view animal sightings.</h4>
                        </div>
                        <div className="wwSummary3">
                            <h3>Track Species</h3>
                            <h4>Record Species, behavior, and track animal sightings over time.</h4>
                        </div>
                    </div>
                </section>
                <Link to='/SignUpForm'>Sign Up</Link>
            </div>
        );
    }
}