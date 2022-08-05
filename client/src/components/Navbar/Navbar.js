import React from "react"
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/authentication'
import { Link } from 'react-router-dom';
import './styles.css';
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(logOut())
        navigate('/')
    }

        return (
            <div className="navbar">
                <Link to="/">Back to all rooms</Link>
                <button onClick={logout} className="logout">Log Out</button>
            </div>
        )
 

    
}

export default Navbar