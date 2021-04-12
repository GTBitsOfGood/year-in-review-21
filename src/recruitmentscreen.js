import React from 'react'
import applicationsCard from "./images/applications-card.png"
import openPositionsCard from './images/open-positions-card.png'
import projectTeamsCard from './images/total-project-teams.png'
import bootcampersCard from './images/bootcampers.png'
import nonprofitsCard from './images/total-nonprofits.png'

const RecruitmentScreen = () => (
    <section>
        <div className="App">
            <image id="recruitment1"></image>
            <image id="recruitment2"></image>
            <div class="containerApplications">
                <img src={applicationsCard}/>
            </div>
            <div class="containerOpenPositions">
                <img src={openPositionsCard}/>
            </div>
            <div class="containerProjectTeams">
                <img src={projectTeamsCard}/>
            </div>
            <div class="containerBootcampers">
                <img src={bootcampersCard}/>
            </div>
            <div class="containerNonprofits">
                <img src={nonprofitsCard}/>
            </div>
        </div>
    </section>

)

export default RecruitmentScreen