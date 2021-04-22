import './Roster.css';
//URL FOR HELP
//https://github.com/theoephraim/node-google-spreadsheet
import boss1 from './images/Shriekwing2.png';
import boss2 from './images/Huntsman2.png';
import boss3 from './images/Huntsman2.png';
import boss4 from './images/Sunking2.png';
import boss5 from './images/Inerva2.png';
import boss6 from './images/artificer2.png';
import React from 'react'
import {Card, CardBody, Col, Row} from "reactstrap";

const bosses = [boss1, boss2, boss3, boss4, boss5, boss6]

const Roster = ({ rosters, isLoaded }) =>{
    if(!isLoaded){
        return(<div>Loading...</div>);
    }else{
        let bossList = rosters.map((boss, i) => {
            let name = boss.bossName;
            let bossRoster = Object.keys(boss.raiderList).map((label, i) => {
                return(
                    <div key={i}>
                      <span>
                          {`${boss.raiderList[label].name}`} {`${boss.raiderList[label].activeSpec}`}
                      </span>
                    </div>
                );
            });
            return(
                <Col key={i}>
                    <img src={bosses[i]} className="BossLogo" alt="logo"/>
                    <h3>{name}</h3>
                    <span>{bossRoster}</span>
                </Col>
            )
        });
        return(
            // <Roster roster={bossList}/>

            <Card className="card-tasks">
                <CardBody>
                <Row className="Roster">
                    {bossList}
                </Row>
                </CardBody>
            </Card>
    )
    }
}

export default Roster;
