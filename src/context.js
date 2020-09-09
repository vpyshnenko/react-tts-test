import React,{Component} from 'react';
import {ttsRequest, ttsRequest2} from './services'



const AppContext = React.createContext();

export const Consumer = AppContext.Consumer
export class Provider extends Component {
    state = {
      text: '',
      audioContent: undefined,
      speakingRate: 1,
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    text: this.state.text,
                    audioContent: this.state.audioContent,
                    speakingRate: this.state.speakingRate,
                    setText: (text)=>this.setState({text}),
                    setSpeakingRate: (speakingRate) => this.setState({speakingRate}),
                    getAudio: async ()=>{
                      console.log('state', this.state)
                      const {audioContent} = await ttsRequest(this.state.text, this.state.speakingRate)
                      this.setState({audioContent})

                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}



