import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



function UserDetails() {
    const { id } = useParams();

    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUsers(data))

    }, [])
    return (
        <div style={styles.container}>
            <h1>User Details</h1>

            {users && users.name && (
                <h2>{users?.name?.firstname} {users.name.lastname}</h2>
            )}
            <p>Email:{users.email}</p>
            <p>Password:{users.Password}</p>
            <Link to="/users" style={styles.button}>Go Back UsersList</Link>

        </div>
    )
}

const styles = {
    container: {
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
    },
    button: {
        padding: '0.75rem 1.5rem',
        backgroundColor: '#3982d6ff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '6px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    card: {
        backgroundColor: '#f4f4f4',
        marginBottom: '2rem',
        padding: '2rem',
        borderRadius: '8px',
    },
}

export default UserDetails