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
            <div className='campaign-stuff'>
                <NavLink to={`/users/${userId}/campaigns/new`}>
                    <button id='create-campaign'>New</button>
                </NavLink>
                <h3>Created</h3>
            </div>
            <div className='campaign-container'>
                {collection.map((c) => (
                    <NavLink to={`/campaigns/${c?.id}`} className='c-card-link'>
                        <div className='campaign-card' key={`${c?.id}`}>
                            <h3 className='card-title'>{c?.name}</h3>
                            <p className='num-card'>{c?.player_max} players max</p>
                            <p className='num-card'>Experience Level: {c?.exp_req}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default UserCampaignsPage;