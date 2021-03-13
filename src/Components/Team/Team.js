import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {strTeam,strTeamBadge,strSport,idTeam} = props.team
    return (
        <div className="col-md-4 col-sm-12 text-center">
            <div style={{boxShadow: '5px 5px 40px cyan'}} className="mt-4 p-2 bg-white rounded">
            <img style={{width:"100px"}} src={strTeamBadge} alt=""/>
            <h4>{strTeam}</h4>
            <p>Sports type: {strSport}</p>
            <Link to={"/team/"+idTeam}><button className="btn btn-primary"><FontAwesomeIcon icon={faArrowRight}/> Explore</button></Link>
            </div>
        </div>
    );
};

export default Team;