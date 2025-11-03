import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UsersPage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
           .then(data => setUsers(data))

    }, [])
    return (
        <div style={styles.container}>
            <h1>UserLists</h1>
            <ul style={styles.list}>
            {users.map((User) =>(
                <li key={User.id} style={styles.card}>
                    <Link to={`/users/${User.id}`} style={styles.Link}>
                    <h3>{User.name.firstname} {User.name.lastname}</h3>
                     </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}

const styles={
    container:{
        padding:'2rem',
        fontFamily:'Arial, sans-serif',
    },
    list:{
        listStyle: 'none',
        padding:0,
    },
    card:{
        backgroundColor: '#f4f4f4',
        marginBottom:'2rem',
        padding:'2rem',
        borderRadius: '8px',
    },
    Link:{
         textDecoration: 'none',
    color: '#133d69ff',
    }
}
export default UsersPage