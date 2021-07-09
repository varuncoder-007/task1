import React from 'react'
import './Faq.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
function Faq() {
    return (
        <div className="faq">
            <div className="faq__container">
                <div className="faq__header">
                    <h1>FAQ'S</h1>
                </div>
                <div className="faq__body">
                    <div className="question">
                        <PlayArrowIcon />
                        <div className="box">
                            <p>Question 1 ?</p>
                        </div>
                        
                    </div>
                    <div className="question">
                    <PlayArrowIcon />

                        <div className="box">
                            <p>Question 2 ?</p>
                        </div>
                        
                    </div><div className="question">
                    <PlayArrowIcon />

                        <div className="box">
                            <p>Question 3 ?</p>
                        </div>
                        
                    </div>
                    <div className="question">
                    <PlayArrowIcon />

                        <div className="box">
                            <p>Question 4 ?</p>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Faq
