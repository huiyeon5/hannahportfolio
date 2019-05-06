import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisV);

class Projects extends React.Component {
    render() {
        return (
            <section style={{width:`calc(100vw - (100vw - 100%))`, height:`100vh`, background:`whitesmoke`}}>
                <h2 style={{position:`relative`, top:40, textAlign:`center`, fontWeight:300, color:`#fa7268`, fontSize:40}}>My Projects</h2>
                <div className="container" style={{marginTop:130}}>
                    <div className="row">
                        <div style={{border:`1px solid black`}} className="col s12 m4 l4">
                            <div className="card blue-grey darken-1">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="../images/gatsby-icon.png" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Card Title <FontAwesomeIcon className="material-icons right" icon={['fas', 'ellipsis-v']}/></span>
                                    <p><a href="#">This is a link</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title</span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{border:`1px solid black`}} className="col s12 m4 l4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Card Title</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div style={{border:`1px solid black`}} className="col s12 m4 l4">
                        <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Card Title</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;