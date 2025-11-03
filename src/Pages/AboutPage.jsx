import React from 'react'
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div style={styles.container}>
<h1 style={styles.h1}>About this Page</h1>
<p>        This application is designed to help users manage and explore user data efficiently.
        It provides a clean interface for navigating between different sections, viewing user details,
        and learning more about the app’s functionality.</p>
        <p>        Whether you're an admin looking to oversee user activity or a developer testing user flows,
        this app offers a simple and intuitive experience to get started quickly.</p>
        <p>        Built with React, it demonstrates core concepts like routing, component structure, and state management.</p>
     <Link to="/Home" style={styles.button}>Go Back Home</Link>
    </div>
  );
};

const styles ={
    container: {
        Padding:'3rem',
        fontFamily: 'Arial, sans-serif',
         lineHeight: '2.6',
    maxWidth: '900px',
    margin: '0 auto',
    },
    h1:{
 textAlign: 'center',
    },
    button:{
          padding: '0.75rem 1.5rem',
        backgroundColor: '#007bff',
         color: '#fff',
         textDecoration:'none',
         borderRadius:'6px'
    }
}

export default AboutPage