import React from 'react';
import './usercampaignspage.css';

function UserCampaignsPage({user, campaigns}) {
    const ex = campaigns[1];
    return (
        <ul>
            <li><strong>Campaign Name</strong> {ex.name}</li>
        </ul>
    )
}

export default UserCampaignsPage;