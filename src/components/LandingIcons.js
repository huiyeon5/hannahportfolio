import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'

library.add(faLinkedinIn,faChartPie);

const LandingIcons = () => {
    return (
        <div style={{height: `100%`, display:`flex`, justifyContent:`space-around`, alignItems:`center`}} className="col s12 l5 right" >
            <Fade bottom delay={1000} duration={200}>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={{color:`#fa7268`, fontSize:30, cursor:`pointer`}} className="landingIcon" onClick={() => {
                    window.open('https://www.linkedin.com/in/hyeonjeong-l-b62a13150/', "_blank")
                }}/>
                <FontAwesomeIcon icon={['fas', 'chart-pie']} style={{color:`#fa7268`, fontSize:30, cursor:`pointer`}} className="landingIcon" onClick={() => {
                    window.open('https://public.tableau.com/profile/lee.hyeonjeong#!/', "_blank")
                }}/>
            </Fade>
        </div>
    )
}

export default LandingIcons;