import React from 'react';
import { NavLink } from 'react-router-dom';
import './usercampaignspage.css';

function UserCampaignsPage({user, campaigns}) {
    const userId = user?.id;
    const collection = [];
    for (const v in campaigns) {
        const c = campaigns[v];
        if (c?.user_id === userId) collection.push(c);
    }

    return (
        <>
            <NavLink to={`/users/${userId}/campaigns/new`}>
                <button>Create New Campaign</button>
            </NavLink>
            <h3>Created</h3>
            {collection.map((c, i) => (
                <NavLink to={`/campaigns/${c?.id}`}>
                    <div className='campaign-card' key={`${c?.id}`}>
                        <ul>
                            <li>{c?.name}</li>
                            <li>{c?.about}</li>
                            <li>{c?.player_max}</li>
                        </ul>
                    </div>
                </NavLink>
            ))}
        </>
    )
}

export default UserCampaignsPage;