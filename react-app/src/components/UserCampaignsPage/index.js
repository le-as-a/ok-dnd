import React from 'react';
import './usercampaignspage.css';

function UserCampaignsPage({user, campaigns}) {
    const userId = user?.id;
    const collection = Object.values(campaigns)
    console.log(collection)
    return (
        <>
            {collection.map(c => (
                <div>
                    <ul>
                        <li>{c?.name}</li>
                        <li>{c?.about}</li>
                        <li>{c?.player_max}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default UserCampaignsPage;