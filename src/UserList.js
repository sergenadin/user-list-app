import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUserList(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="user-list">
            <h1>Liste des Utilisateurs</h1>
            <ul>
                {userList.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
