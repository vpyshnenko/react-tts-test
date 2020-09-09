import React,{Component} from 'react';
import {ttsRequest, ttsRequest2} from './services'



const AppContext = React.createContext();

export const Consumer = AppContext.Consumer
export class Provider extends Component {
    state = {
      text: '',
      audioContent: undefined,
      speakingRate: 1,
      voiceName: 'en-US-Wavenet-D',
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    text: this.state.text,
                    audioContent: this.state.audioContent,
                    speakingRate: this.state.speakingRate,
                    voiceName: this.state.voiceName,
                    setText: (text)=>this.setState({text}),
                    setSpeakingRate: (speakingRate) => this.setState({speakingRate}),
                    setVoiceName: (voiceName) => this.setState({voiceName}),
                    getAudio: async ()=>{
                      console.log('state', this.state)
                      const {audioContent} = await ttsRequest(this.state.text, this.state.speakingRate, this.state.voiceName)
                      this.setState({audioContent})

                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}



