import './campaignpage.css';
import React from 'react';
import { useParams } from 'react-router-dom';


const CampaignPage = ({campaigns}) => {
    const { campaignId } = useParams();
    const current = campaigns[campaignId];

    return (
        <div>
            <ul>
                <li><u>Name:</u> {current?.name}</li>
                <li><u>About:</u><br />
                    {current?.about}
                </li>
                <li><u>Player Max:</u> {current?.player_max}</li>
                <li><u>Experience Level Required:</u> {current?.exp_req}</li>
                <li><u>Themes:</u><br />
                    {current?.themes}
                </li>
            </ul>
        </div>
    );
}
export default CampaignPage;