import React, { Component } from "react";
import "./chat.scss";

import ChatImage from "../../supports/image/chat.jpg";

class Chat extends Component {
  state = {};
  render() {
    return (
      <div className="chat">
        <img src={ChatImage} alt="chat" />
      </div>
    );
  }
}

export default Chat;
