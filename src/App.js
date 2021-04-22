import './App.css';
import Roster from './Roster';
import React from "react";
import {Card, CardBody, Col} from "reactstrap";

class App extends React.Component {
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
          <>
              <div className="content">
                  <Card className="card-stats">
                      <CardBody>
                        <Roster isLoaded={this.state.isLoaded} rosters={this.state.rosters}/>
                      </CardBody>
                  </Card>
              </div>
          </>
          )
  }

}

export default App;
