import React, { useEffect } from 'react';
import { green, black } from 'ansi-colors';

function User({ user, onRemove, onToggle })
{
    const { username, email, id, online } = user;

    useEffect(() => {
        console.log('user값이 설정됨')
        console.log(user);
        return () => {
            console.log('user값이 변경되기 전');
            console.log(user);
        }
    }, [user])

    return(
        <div>
            <b
                style={{
                    color: online ? 'red' : 'black',
                    backgroundColor: online ? 'pink' : 'white',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >{username}</b>
            <span>({email})</span>
            &nbsp;
            <button onClick={() => onRemove(id)}> 삭제하기</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle })
{
    return(
        <div>
            {
                users.map(
                    (user, index) => ( 
                        <User 
                            user={user} 
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    ) 
                )
            }
        </div>
    )
}

export default UserList;