import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(response => response.json())
        .then(data => setTeam(data.teams))
    },[])
    const soccerTeam = team.slice(0,15);
    const title = <h1>Premier League Top Team</h1>;

    return (
        <div style={{backgroundColor:"#0E0A2B"}}>
        <Header title={title}></Header>
        <div className="container">
        <div style={{backgroundColor:'#0E0A2B'}} className="row d-flex justify-content-md-center m-3">
            {
                soccerTeam.map(team => <Team key={team.idTeam} team = {team}></Team>)
            }
        </div>
      </div>
      </div>
    );
};

export default Home;