import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MaleImg from '../../Images/Photo/male.png';
import FemaleImg from '../../Images/Photo/female.png';
import FoundImg from '../../Images/Icon/found 1.png';
import FlagImg from '../../Images/Icon/flag (1) 1.png';
import TypeImg from '../../Images/Icon/football (1) 1.png';
import GenderImg from '../../Images/Icon/male-gender-sign 1.png';
import Facebook from '../../Images/Icon/Facebook.png';
import Twitter from '../../Images/Icon/Twitter.png';
import Youtube from '../../Images/Icon/YouTube.png';
import Header from '../Header/Header';



const TeamDetails = () => {
    const { teamId } = useParams();
    const [TeamDetails, setTeamDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(response => response.json())
            .then(data => setTeamDetails(data.teams[0]));
    }, [teamId])
    
    const {strGender,strTeam,intFormedYear,strCountry, strSport,strTeamBadge,strFacebook,strTwitter,strYoutube,strDescriptionEN} = TeamDetails;
    let image;
    const imageStyle = {
        width: '100%'
    };
    const iconStyle = {
        width: '15px'
    };
    strGender === 'Male' ? image = <img style={imageStyle} src={MaleImg} alt=""/> : image = <img style={imageStyle} src={FemaleImg} alt=""/>
    const teamLogo = <img src={strTeamBadge} alt=""/>
    return (
        <div style={{backgroundColor:"#0E0A2B"}}>
            <Header title={teamLogo}></Header>
            <div className="container">
                <div style={{borderRadius:"10px"}} className="d-flex row justify-content-md-between align-items-center p-3 bg-primary m-2">
                    <div className="col-md-7 col-sm-12 text-white">
                        <h4>{strTeam}</h4>
                        <p><img style={iconStyle} src={FoundImg} alt="" /> Founded: {intFormedYear}</p>
                        <p><img style={iconStyle} src={FlagImg} alt="" /> Country: {strCountry}</p>
                        <p><img style={iconStyle} src={TypeImg} alt="" /> Sport type: {strSport}</p>
                        <p><img style={iconStyle} src={GenderImg} alt="" /> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-5 col-sm-12 p-2">
                        {image}
                    </div>
                </div>
                <div className="m-2 text-white">
                    <p>{strDescriptionEN}</p>
                    <p></p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <a href={`http://${strFacebook}`} target="_blank" rel="noreferrer"><img style={{width: '50px', margin: '3px'}} src={Facebook} alt=""/></a>
                <a href={`http://${strTwitter}`} target="_blank" rel="noreferrer"><img style={{width: '50px', margin: '3px'}} src={Twitter} alt=""/></a>                
                <a href={`http://${strYoutube}`} target="_blank" rel="noreferrer"><img style={{width: '50px', margin: '3px'}} src={Youtube} alt=""/></a>
            </div>
        </div>
    );
};

export default TeamDetails;