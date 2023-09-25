import React ,{Component} from "react"
import Header from './Header.js'
import Team from './TeamClick'

class App extends Component{
    render(){
        return(
            <div className="container" >
            <Header/>
            <Team/>
            </div>
        )
    }
}
export default App;

