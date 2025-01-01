
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import run from "../gemini";


// eslint-disable-next-line react-refresh/only-export-components
export const datacontext = createContext(); //global variable for user data
// eslint-disable-next-line react/prop-types
function UserContext ({ children })  {

   let [speaking, setSpeaking] = useState(false)

  let [prompt, setPrompt] = useState("listening...")

  let  [response, setResponse] = useState(false)
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.pitch = 1;
    text_speak.rate = 1;
    text_speak.lang = "hi-GB";

    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(prompt) {
    try {
      let text = await run(prompt)
      let newText = text.split("**") && text.split("*") &&  text.replace("google"," prathamesh sir") 
      setPrompt(newText)
      speak(newText)
      setResponse(true)
      setTimeout(() => {
          setSpeaking(false)
      }, 6000);
    } catch (error) {
      console.error("Error getting AI response:", error);
    }
  }

  let speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new speechRecognition();

  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setPrompt(transcript)
    takeCommand(transcript.toLowerCase())
  }

function takeCommand(command) {
    if(command.includes("open") && command.includes("youtube")) {
        window.open("https://www.youtube.com/", "_blank")              //blank means new tab
        speak("Roger that boss ,opening youtube")
        setResponse(true)
        setPrompt(" opening YouTube....")
        setTimeout(() => {
            setSpeaking(false)
        }, 6000)
} 
else if 
(command.includes("open") && command.includes("google")) {
    window.open("https://www.google.com/", "_blank")              //blank means new tab
    speak("Roger that boss ,opening google")
    setResponse(true)
    setPrompt(" opening Google....")
    setTimeout(() => {
        setSpeaking(false)
    }, 6000)
} 
else if 
(command.includes("open") && command.includes("instagram")) {
    window.open("https://www.instagram.com/", "_blank")              //blank means new tab
    speak("Roger that boss ,opening instagram")
    setResponse(true)
    setPrompt(" opening Instagram....")
    setTimeout(() => {
        setSpeaking(false)
    }, 6000)
} 
else
 {
    aiResponse(command)
} 
}

  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse
  };
  return (
    <div>
      <datacontext.Provider value={value}>{children}</datacontext.Provider>
    </div>
  );
};

export default UserContext


// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// // eslint-disable-next-line react-refresh/only-export-components
// import React, { createContext } from "react";
// import run from "../gemini";

// // eslint-disable-next-line react-refresh/only-export-components
// export const datacontext = createContext(); //global variable for user data

// function UserContext({ children }) {
//   // Function to speak text using SpeechSynthesis API
//   function speak(text) {
//     if ("speechSynthesis" in window) {
//       let text_speak = new SpeechSynthesisUtterance(text);
//       text_speak.volume = 1;
//       text_speak.pitch = 1;
//       text_speak.rate = 1;
//       text_speak.lang = "hi-GB";

//       // Use the correct property (speechSynthesis)
//       window.speechSynthesis.speak(text_speak);
//     } else {
//       console.error("SpeechSynthesis API is not supported in this browser.");
//     }
//   }

//   // Function to get AI response and speak it
//   async function aiResponse(prompt) {
//     try {
//       let text = await run(prompt);
//       speak(text);
//     } catch (error) {
//       console.error("Error getting AI response:", error);
//     }
//   }

//   // Speech recognition setup
//   let speechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   let recognition = new speechRecognition();

//   recognition.onresult = (e) => {
//     let currentIndex = e.resultIndex;
//     let transcript = e.results[currentIndex][0].transcript;
//     console.log("Recognized Speech:", transcript);
//     aiResponse(transcript)
//   };

//   let value = {
//     recognition,
//   };

//   return (
//     <div>
//       <datacontext.Provider value={value}>{children}</datacontext.Provider>
//     </div>
//   );
// }

// export default UserContext;

