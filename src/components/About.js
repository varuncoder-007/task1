import React from 'react'
import './About.css';
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'

function About() {
    return (
        <div className="about"> 
            <div className="about__header">
                About The Course
            </div>
            <div className="about__section">
            <div className="about__left">
                <div className="about__option">
                <img src={one} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
                <div className="about__option">
                <img src={two} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
                <div className="about__option">
                <img src={three} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
                <div className="about__option">
                <img src={four} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
                
            </div>
            <div className="about__right">
            <div className="about__option">
                <img src={one} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
                <div className="about__option">
                <img src={two} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
                <div className="about__option">
                <img src={three} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
                <div className="about__option">
                <img src={four} alt=""/>
                <div className="about__title">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet,</p>
                <p>consectetur adipiscing elit</p>
                </div>
                
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default About
