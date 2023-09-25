import React, { Component } from 'react'
import File from './File.js'

class App extends Component {
    render() {
        return (
            <div>
                <File name="Omar" nickname="Guetat" />
                <File name="Ayoub" nickname="Masmoudi" />
                <File name="Ibrahim" nickname="Fakhfekh" />
            </div>)
    }
}
export default App;