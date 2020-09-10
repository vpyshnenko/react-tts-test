import {audioContent as testAudioContent} from './testUrl'

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': 'AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}


const data = { "input": { "text": "Hello" }, "voice": { "languageCode": "en-US", "name": "en-US-Wavenet-D" }, "audioConfig": { "audioEncoding": "LINEAR16", "pitch": 0, "speakingRate": 1 } }


export async function ttsRequest(text, speakingRate, voiceName){
 data.input.text = text
 data.audioConfig.speakingRate = speakingRate
    data.voice = {
        languageCode: 'en-US', 
        name: voiceName
    }
    const res = await postData('https://texttospeech.googleapis.com/v1/text:synthesize', data)
    return res
}

export async function getVoices() {
    const response = await fetch('https://texttospeech.googleapis.com/v1/voices', {
        headers: {
            'X-Goog-Api-Key': 'AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4'
           },

    })
    const data = await response.json()
    const voiceNames =  data.voices.filter(voice => voice.name.includes('en-US')).map(item => item.name)
      return voiceNames
}

export async function ttsRequest2(text){
  return {
    audioContent: testAudioContent
  }
}