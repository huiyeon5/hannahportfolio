import React from 'react'
import Fade from 'react-reveal/Fade'

class About extends React.Component {
    render() {
        return (
            <section style={{width:`calc(100vw - (100vw - 100%))`, height:`100vh`}}>
                <h2 style={{position:`relative`, top:40, textAlign:`center`, fontWeight:300, color:`#fa7268`, fontSize:40}}>About Me</h2>
                <div className="container" style={{display:`grid`, gridTemplateColumns:`1fr 1fr`}}>
                    <Fade left>
                        <h1>Hello World</h1>
                    </Fade>
                    <Fade right>
                        <h1>Bye World</h1>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default About;