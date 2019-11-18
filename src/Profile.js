import React from 'react';

const profileData = {
    wlsgml: { 
        name: 'Jinhee',
        description: '진희는 공부를 싫어하는 사람입니다.'
    },
    tjdud: {
        name: 'seoyoung',
        description: '서영이는 아이스크림을 좋아하는 사람입니다.'
    }
}

const Profile = ({ match }) => {
    const {username} = match.params;
    const profile    = profileData[username];
     return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
};

export default Profile;