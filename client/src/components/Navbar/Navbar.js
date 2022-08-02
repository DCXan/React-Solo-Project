import React from "react"
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/authentication'
import './styles.css';

function Navbar() {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logOut())
    }

        return (
            <>
                <button onClick={logout} className="logout">Log Out</button>
            </>
        )
 

    
}

export default Navbar