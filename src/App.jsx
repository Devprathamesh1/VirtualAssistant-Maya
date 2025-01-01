// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './App.css'
import { RiMic2AiLine } from "react-icons/ri";
import { datacontext } from './context/UserContext';
import speakimg from './assets/speak.gif'
import aigif from './assets/aiVoice.gif'



const App = () => {
    let {recognition, setSpeaking, speaking, prompt, response , setPrompt , setResponse} = useContext(datacontext)                 // recognition  and onclick => .start and .stop
 
    
  return (
    <div className='main'>
      <img src="./src/assets/ai.png" alt=""  id='maya'/>                            
      <span>I am Maya , your Personal virtual Assistant </span>      

      {!speaking ?  <button onClick={() => {

                  setPrompt("listening...")
                  setSpeaking(true)
                  setResponse(false)
                    recognition.start()
            
            }}>
                Click Here <RiMic2AiLine />
            </button>   
            : 

            <div className='response'>
              {!response ? <img src={speakimg} alt="" id='speak'/> : <img src={aigif} alt="" id='aigif'/>}
              
              <p>{prompt}</p>
            </div>
            
            }                   
          
      </div>
  )
}

export default App