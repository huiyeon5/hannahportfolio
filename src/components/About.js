import React from 'react';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image'

class About extends React.Component {
    render() {
        return (
            <section style={{width:`calc(100vw - (100vw - 100%))`,minHeight:`100vh`,}}>
                <div className="container">
                    <div className="row">
                        <h2 style={{height:100, display:`flex`, justifyContent:`center`, alignItems:`center`,textAlign:`center`, fontWeight:300, color:`#fa7268`, fontSize:40}}>About Me</h2>
                    </div>
                    <div className="row">
                        <Fade left>
                            <div className="col s12 m6 l6" style={{display:`flex`, justifyContent:`center`, alignItems:`center`}}>
                                <Img fluid={this.props.fluid} style={{borderRadius:`50%`, boxShadow:`0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)`, marginBottom:30, maxWidth:`300px`}} alt="Hannah Lee" title="Hyeonjeong Lee"/>
                            </div>
                        </Fade>
                        <Fade right>
                        <div className="col s12 m12 l6">
                            <h3 style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, color:`black`, fontWeight:`bold`, margin:0,padding:0, marginBottom:`1.45rem`,textRendering:`optimizeLegibility`, lineHeight:1.1, fontSize:`1.38316rem`}}>Hi, I'm Huiyeon Kim. I am a Developer, Tech Enthusiast and a Writer.</h3>
                            <p style={{color:`black`, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>I am currently a Penultimate Student studying in Singapore Management University, B.Sc. Information Systems. 
                            Want to know more about what Im learning now? Visit <span style={{color:`#2b33b2`, cursor:`pointer`}} onClick={() => window.open("https://learnwars.com", "__blank")}><b>LearnWars</b></span> and read about it!
                            </p>
                        </div>
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;