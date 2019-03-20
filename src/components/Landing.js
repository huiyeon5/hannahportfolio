import React from  'react'
import 'confetti-js';
import Fade from 'react-reveal/Fade'
import LandingIcons from './LandingIcons'

class Landing extends React.Component {
    componentDidMount() {
        const ConfettiGenerator = window.ConfettiGenerator;
        var confettiSettings = { 
            target: 'confetti-landing',
            max: 60,
            colors:[[250, 114, 104]],
            clock: 6,
            props: [
                'circle', 
                'square', 
                'triangle', 
                'line'
            ],
        };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }

    render() {
        return (
            <section style={{height:`100vh`, width:`calc(100vw - (100vw - 100%))`,  position:`relative`, overflow:`hidden`}}>
                <canvas id="confetti-landing" style={{width:`100%`, height:`100%`, position:`absolute`,}}></canvas>
                <div style={{position:`absolute`, background:`transparent`, width:`100%`, height:`100%`}}>
                    <div style={{position:`relative`, display:`flex`, flexDirection:`column`, justifyContent:`flex-end`, height:`100%`}} className="container">
                        <Fade top duration={650}>
                            <h1 style={{color:`black`, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, wordWrap:`normal`, margin:0, padding:0, marginBottom:`1.45rem`, fontWeight:`bold`, textRendering:`optimizeLegibility`, fontSize:`7rem`, lineHeight:1.1}}>Hello, <br/>I'm <span style={{color:`#fa7268`}}>Hannah</span></h1>
                        </Fade>
                        <Fade top delay={500} duration={500}>
                            <h2 style={{color:`black`, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontWeight:400, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, fontSize:`1.62671rem`, lineHeight:1.1}}> <span style={{color:`#fa7268`}}>Scroll down</span> and get to know me better</h2>
                        </Fade>
                    </div>
                </div>
                <div className="container" style={{position:`absolute`, bottom:0, right:0}}>
                    <div className="row" style={{height: `100%`}}>
                        <LandingIcons />
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing