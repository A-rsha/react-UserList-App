import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
      
            <nav style={styles.Navbar}>
                <NavLink to="/Home" style={styles.NavLink}>Home</NavLink>
                <NavLink to="/about" style={styles.NavLink}>About</NavLink>
                <NavLink to="/users" style={styles.NavLink}>users</NavLink>
            </nav>
        
    )
}
const styles={
Navbar:{
      backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    gap: '1.5rem',
},
NavLink:{
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',

}

}

export default Navbar