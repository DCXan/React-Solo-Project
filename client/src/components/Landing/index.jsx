import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/authentication'
import './styles.css';

function Landing() {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logOut())
    }

    return (
        <>
            <h2>Choose a Chat Room</h2>
            <ul className="chat-room-list">
                {chatRooms.map((room) => (
                    <li key={room.id}>
                        <Link to={`/room/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
                <button onClick={logout} className="logout">Log Out</button>
            </ul>
        </>
    );
}

export { Landing };