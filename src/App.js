import './App.css';
import {Component} from "react/cjs/react.production.min";
import Roster from './Roster';

class App extends Component {
  state = {
      rosters: [],
      isLoaded: false, // Initial Loading State
  }
  componentDidMount() {
      fetch("https://77.161.253.241:5005/api/Roster/GetRosters")
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({
                      rosters: result,
                      isLoaded: true
                  });
                  console.log(result);
              }
          )
  }
  render() {
      return(
          <Roster isLoaded={this.state.isLoaded} rosters={this.state.rosters}/>
          )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
