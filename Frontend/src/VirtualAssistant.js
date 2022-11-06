import React, { Fragment, useEffect, useRef } from "react";
import "./VirtualAssistant.css";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slide from "@mui/material/Slide";
import {
  Fab,
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import NotificationAudio from "./assets/mixkit-sci-fi-click-900.wav";
import { questions } from "./questions";
const API = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new API();
Recognition.continous = true;
Recognition.continuous = true;
Recognition.long = "en-GB";
const synth = window.speechSynthesis;
export default function VirtualAssistant({
  clickedAssistant,
  onCloseAssistant,
}) {
  const [messages, setMessages] = React.useState([]);
  const [language, setLanguage] = React.useState();
  const [messageInput, setMessageInput] = React.useState("");
  const [isListening, setIsListening] = React.useState(false);
  const audioRef = useRef();
  useEffect(() => {
    if (isListening) {
      Recognition.onresult = (event) => {
        let resultMessage = "";
        for (const result of event.results) {
          resultMessage += result[0].transcript;
        }
        setMessageInput((prev) => prev + resultMessage);
        toggleMic(false);
      };
      Recognition.onnomatch = (event) => {
        console.log("no match");
        toggleMic(false);
      };
      Recognition.onerror = (event) => {
        console.log("error");
        toggleMic(false);
      };
      Recognition.onspeechend = (event) => {
        console.log("ended");
        toggleMic(false);
      };
    }
  }, [isListening]);

  const containerRef = React.useRef(null);
  const onTypeMessage = (event) => {
    setMessageInput(event.target.value);
  };

  const onClickSendButton = () => {
    if (messageInput) {
      setMessages((prev) => [...prev, { message: messageInput, type: "user" }]);
      setMessageInput("");
      const input = messageInput.toLowerCase();
      let assistantMessage = "";

      for (let i = 0; i < questions.length; i++) {
        let keyPresent = true;
        const question = questions[i];
        question.keywords.every((key) => {
          console.log(key);
          if (input.includes(key)) {
            keyPresent = true;
          } else {
            keyPresent = true;
            key.split("*").every((word) => {
              if (!input.includes(word)) {
                console.log(word + " not present in " + input);
                keyPresent = false;
                return false;
              }
              return true; //end loop
            });
          }
          if (keyPresent) return false;
          return true; //end loop
        });
        if (keyPresent) {
          assistantMessage = question.reply;
          const utter = new SpeechSynthesisUtterance(question.voice);
          utter.rate = 1.80;
          const voice = synth.getVoices()[2];
          // utter.pitch  = 2;
          utter.voice = voice;
          synth.speak(utter);
          // eslint-disable-next-line no-loop-func
          setMessages((prev) => [
            ...prev,
            {
              message: assistantMessage,
              type: "assistant",
            },
          ]);
          break;
        }
      }
      if (assistantMessage) {
      }
    }
  };
  const toggleMic = (action) => {
    setIsListening(action);
    if (action) Recognition.start();
    else Recognition.stop();
    //          document.querySelector("audio").play();
  };
  const onPressEnter = (event) => {
    if (event.code === "Enter") onClickSendButton();
  };
  return (
    <div ref={containerRef} className="virtualAssistantContainer">
      <Slide
        container={containerRef.current}
        direction="left"
        in={clickedAssistant}
        mountOnEnter
        unmountOnExit
      >
        <div className="virtualAssistant">
          <div className="textMessageSpace">
            <div className="assistantBackButtonContainer">
              <button
                onClick={onCloseAssistant}
                className="assistantBackButton"
              >
                <ArrowBackIcon />
              </button>
              <div className="languageSelectContainer">
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Choose Language
                  </InputLabel>
                  <Select
                    className="languageSelector"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // defaultValue={1}
                    value={language}
                    placeholder="Choose Language"
                    variant="standard"
                    label="Choose Language"
                    onChange={(event) => {
                      setLanguage(event.target.value);
                    }}
                  >
                    <MenuItem value={1}>English</MenuItem>
                    <MenuItem value={2}>Tamil</MenuItem>
                    <MenuItem value={3}>Telugu</MenuItem>
                    <MenuItem value={4}>Malayalam</MenuItem>
                    <MenuItem value={5}>Kannada</MenuItem>
                    <MenuItem value={6}>Hindi</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {messages.length === 0 && (
              <div className="messageInstruction">
                <em>Say 'bob' to start the conversation</em>
              </div>
            )}
            <div className="textMessages">
              {messages.map((message, index) => (
                <div key={index} className={`${message.type}Message`}>
                  <div className="message">{message.message}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="textInputContainer">
            <div className="textInput">
              <input
                onKeyDown={onPressEnter}
                onInput={onTypeMessage}
                value={messageInput}
                placeholder={isListening ? "listening..." : "type something..."}
              />
              {isListening ? (
                <StopIcon
                  onClick={() => {
                    toggleMic(false);
                  }}
                />
              ) : (
                <MicIcon
                  onClick={() => {
                    toggleMic(true);
                  }}
                />
              )}
            </div>
            <div className="messageAction">
              <Fab
                onClick={onClickSendButton}
                className=""
                color="secondary"
                aria-label="add"
              >
                {isListening ? (
                  <lottie-player
                    src="https://assets5.lottiefiles.com/packages/lf20_yr6skceg.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                ) : (
                  <SendIcon />
                )}
              </Fab>
            </div>
          </div>
        </div>
      </Slide>
      <audio ref={audioRef} src={NotificationAudio} />
    </div>
  );
}
