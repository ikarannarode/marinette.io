import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)


    return (
        <div className='main'>
            <div className="nav">
                <p>marinette.io</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hey, there</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card"><p>Suggest beatiful places to see on an upcomming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card"><p>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card"><p>Brainstorm team bonding activites for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card"><p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div></> : <div className='result'><div className="result-title"><img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data"><img src={assets.gemini_icon} alt="" />
                        {loading ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                    </div></div>}
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} name="" placeholder='Enter a Prompt here' id="" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img src={assets.send_icon} onClick={() => onSent()} alt="" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        marinette.io can make mistakes. Check important info.
                        <br />
                        <span>Made by KΔRΔN</span>
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Main