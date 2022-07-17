import React, { memo, useEffect } from 'react';
import Item from './Item';


const list = memo (({ users, handleDelete }) => {

    useEffect(() => {
        console.log('list render');
    })

    return (
        <ul  >
            {users.map(user => (
                <Item
                key={user.id} user={user} handleDelete={ handleDelete }
                />
            ))}
        </ul>
    )
})

export default list;