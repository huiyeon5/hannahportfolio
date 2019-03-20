import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

library.add(faBriefcase, faGraduationCap);

class Work extends React.Component {
    render() {
        return (
            <section style={{width:`calc(100vw - (100vw - 100%))`, minHeight:`100vh`, background:`whitesmoke`,position:`relative`}}>
                <h2 style={{position:`relative`, top:40, textAlign:`center`, fontWeight:300, color:`#fa7268`, fontSize:40}}>Work experience & Education</h2>
                <div style={{paddingBottom:5, paddingTop:20,}}>
                    <VerticalTimeline >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={['fas', 'briefcase']} style={{fontSize:25}}/>}
                            >
                            <h3 className="vertical-timeline-element-title" style={{marginBottom:10, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,fontWeight:300, color:`rgb(33, 150, 243)`}}>SMU-Google Squared Data & Analytics Programme</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{fontWeight:400}}>Google - SMU</h5>
                            <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
                            <div style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontSize:12, marginTop:10}}>Jan 2019 - Present</div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={['fas', 'briefcase']} style={{fontSize:25}}/>}
                        >
                            <h3 className="vertical-timeline-element-title" style={{marginBottom:10, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,fontWeight:300, color:`rgb(33, 150, 243)`}}>Finance & Corporate Development Intern</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{fontWeight:400}}>The Lo & Behold Group</h5>
                            <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
                            <div style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontSize:12, marginTop:10}}>May 2018 - August 2018</div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={['fas', 'briefcase']} style={{fontSize:25}}/>}
                        >
                            <h3 className="vertical-timeline-element-title" style={{marginBottom:10, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,fontWeight:300, color:`rgb(33, 150, 243)`}}>Honorary Financial Secretary</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{fontWeight:400}}>Red Cross</h5>
                            <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
                            <div style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontSize:12, marginTop:10}}>Jan 2018 - Dec 2018</div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(245, 0, 87)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={['fas', 'graduation-cap']} style={{fontSize:20}}/>}
                            >
                            <h3 className="vertical-timeline-element-title" style={{marginBottom:10, fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,fontWeight:300, color:`rgb(245, 0, 87)`}}>Singapore Management University</h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{fontWeight:400}}>BBA in Finance and 2nd Major in Analytics</h5>
                            <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}}>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
                            <div style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`, fontSize:12, marginTop:10}}>Jun 2016 - Jun 2020</div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        )
    }
}

export default Work;