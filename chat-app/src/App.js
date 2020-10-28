import React from "react"
import MessageList from "./components/messageList"
import SendMessageForm from "./components/sendMessageForm"
import RoomList from "./components/roomList"
import NewRoomForm from "./components/newRoomForm"

  class App extends React.Component {
    render() {
      return (
        <div className="app">
          <RoomList />
          <MessageList />
          <SendMessageForm />
          <NewRoomForm />
        </div>
      );
    }
  }

export default App;
