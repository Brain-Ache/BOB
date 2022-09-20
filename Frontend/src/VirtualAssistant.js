import React, { Fragment, useEffect } from "react";
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
const API = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new API();
Recognition.continous = true;
Recognition.continuous = true;
Recognition.long = "en-GB";

export default function VirtualAssistant({
  clickedAssistant,
  onCloseAssistant,
}) {
  const [messages, setMessages] = React.useState([]);
  const [language, setLanguage] = React.useState();
  const [messageInput, setMessageInput] = React.useState("");
  const [isListening, setIsListening] = React.useState(false);
  console.log(Recognition);
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
      if (input.includes("bob"))
        assistantMessage =
          "Hi, this is your personal assistant BOB the explorer 😁";
      else if (input.includes("loan"))
        assistantMessage = (
          <Fragment>
            <strong>Requirements for digital personal loan:</strong>
            <br />
            <br />
            <strong>1.</strong> valid mobile number.
            <br />
            <strong>2.</strong> aadhar number connected with mobile number.
            <br />
            <strong>3.</strong> valid pan number.
            <br />
            <strong>4.</strong> net banking credentials or digital bank
            statement for last 6 months.
            <br />
            <strong>5.</strong> web - camera for clicking picture and performing
            video kyc
            <br />
            <strong>6.</strong> itr e-filing credentials or digital itr returns
            for last 2 years (for self - employed)
            <br />
            <strong>7.</strong> gst portal credentials or digital gst returns
            for last 1 year (for self - employed)
            <br />
            <br />
            👉
            <a href="https://dil2.bankofbaroda.co.in/pl/?utm_source=google&utm_medium=paidsearch&utm_campaign=BoB_CRAYONS_PL_pl_always&gclid=CjwKCAjwyaWZBhBGEiwACslQo1xP87MhLZp2oX2sgrcHT2uPcByWxw9ENP7uniYF55a6hRd2jtxe_xoCtVIQAvD_BwE">
              click here
            </a>{" "}
            for applying for personal loan
            <br />
            <br />
            Feel free to talk for further clarification🙂
          </Fragment>
        );
      else if (input.includes("thank")) assistantMessage = "You're welcome😇";
      if (assistantMessage)
        setMessages((prev) => [
          ...prev,
          {
            message: assistantMessage,
            type: "assistant",
          },
        ]);
    }
  };
  const toggleMic = (action) => {
    setIsListening(action);
    if (action) Recognition.start();
    else Recognition.stop();
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
    </div>
  );
}
