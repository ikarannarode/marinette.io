import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        onSent(prompt);
    }
    return (
        <div className='sidebar'>

            <div className="top">
                <img className='menu' onClick={(e) => setExtended(prev => !prev)} src={assets.menu_icon} alt="" />
                <div className="new-chat" onClick={() => newChat()}>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    {
                        prevPrompts.map((item, index) => {
                            return (
                                <div className="recent-entry" onClick={() => loadPrompt(item)}>
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)} ...</p>

                                </div>
                            )
                        })
                    }

                </div> : null}

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Acitvity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>



        </div>
    )
}

export default Sidebar