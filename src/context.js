import React,{Component} from 'react';
import {ttsRequest, ttsRequest2} from './services'



const AppContext = React.createContext();

export const Consumer = AppContext.Consumer
export class Provider extends Component {
    state = {
      text: '',
      audioContent: undefined,
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
                    setText: (text)=>this.setState({text}),
                    getAudio: async ()=>{
                      console.log('state', this.state)
                      const {audioContent} = await ttsRequest2(this.state.text)
                      this.setState({audioContent})

                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}



