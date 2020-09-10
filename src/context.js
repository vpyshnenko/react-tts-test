import React, { Component } from "react";
import { ttsRequest, ttsRequest2 } from "./services";

const AppContext = React.createContext();

export const Consumer = AppContext.Consumer;
export class Provider extends Component {
  state = {
    text: "",
    dirty: true,
    speakingRate: 1,
    voiceName: "en-US-Wavenet-D",
    audioUrl: '',
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          text: this.state.text,
          speakingRate: this.state.speakingRate,
          voiceName: this.state.voiceName,
          audioUrl: this.state.audioUrl,
          dirty: this.state.dirty,
          
          setText: text => this.setState({ dirty: true, text }),
          setSpeakingRate: speakingRate => this.setState({ dirty: true, speakingRate }),
          setVoiceName: voiceName => this.setState({dirty: true, voiceName }),
          onPlay: async () => {
            if(!this.state.dirty){
              return
            }
            const { audioContent } = await ttsRequest(
              this.state.text,
              this.state.speakingRate,
              this.state.voiceName
            );
            this.setState({ dirty: false, audioUrl: "data:audio/wav;base64," + audioContent });
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
