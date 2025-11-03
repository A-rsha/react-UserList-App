import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Hey there! Welcome to the UserList App</h1>
      <p>This app helps you browse user profiles easily.</p>
      <p>Click on “Users” to see a list of people, and explore their personal details instantly — all in one smooth, responsive interface!</p>
      
      <div style={styles.nav}>
        <Link to="/about" style={styles.button}>About</Link>
        <Link to="/users" style={styles.button}>Users</Link>
      </div>
    </div>
  );
};

const styles={
    container:{
        textAlign: 'center',
        padding:'5rem',
        fontFamily: 'Arial, sans-serif',
    },
    nav:{
           marginTop:'3.5rem',
           display:'flex',
           justifyContent: 'center',
           gap: '2rem'
    },
    button:{
        padding: '0.75rem 1.5rem',
        backgroundColor: '#007bff',
         color: '#fff',
         textDecoration:'none',
         borderRadius:'6px'
    }
};

export default HomePage