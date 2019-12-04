import React from 'react';

function User({user})
{
    const { username, email, id } = user;
    return(
        <div>
            <b>{name}</b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}> 삭제하기</button>
        </div>
    )
}

function UserList({ users, onRemove })
{
    return(
        <div>
            {
                users.map(
                    user => ( 
                        <User 
                            user={user} 
                            key={user.id}
                            onRemove={onRemove}
                        />
                    ) 
                )
            }
        </div>
    )
}

export default UserList;