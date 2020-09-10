import React, { Component } from "react";
import { ttsRequest, ttsRequest2 } from "./services";

const AppContext = React.createContext();

export const Consumer = AppContext.Consumer;
export class Provider extends Component {
  state = {
    text: "",
    loaded: false,
    audioContent: undefined,
    speakingRate: 1,
    voiceName: "en-US-Wavenet-D",
    audioUrl: '',
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          text: this.state.text,
          audioContent: this.state.audioContent,
          speakingRate: this.state.speakingRate,
          voiceName: this.state.voiceName,
          audioUrl: this.state.audioUrl,
          loaded: this.state.loaded,
          setText: text => this.setState({ loaded: false, text }),
          setSpeakingRate: speakingRate => this.setState({ speakingRate }),
          setVoiceName: voiceName => this.setState({ voiceName }),
          onPlay: async () => {
 
            if(!this.state.text || this.state.loaded){
              return
            }
            const { audioContent } = await ttsRequest(
              this.state.text,
              this.state.speakingRate,
              this.state.voiceName
            );
            this.setState({ loaded: true, audioUrl: "data:audio/wav;base64," + audioContent });
          },
          getAudio: async () => {
            const { audioContent } = await ttsRequest(
              this.state.text,
              this.state.speakingRate,
              this.state.voiceName
            );
            this.setState({ audioContent });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
