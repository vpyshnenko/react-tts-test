import React,{Component} from 'react';
import {ttsRequest} from './services'



const AppContext = React.createContext();

export const Consumer = AppContext.Consumer
export class Provider extends Component {
    state = {
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
                    cars: this.state.cars,
                    audioContent: this.state.audioContent,
                    getAudio: async (text)=>{
                      const {audioContent} = await ttsRequest()
                      console.log('audioCont')
                      this.setState({audioContent})

                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}



