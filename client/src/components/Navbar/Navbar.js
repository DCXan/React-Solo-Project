import React from "react"
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/authentication'
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logOut())
    }

        return (
            <div className="navbar">
                <Link to="/">Back to all rooms</Link>
                <button onClick={logout} className="logout">Log Out</button>
            </div>
        )
 

    
}

export default Navbar