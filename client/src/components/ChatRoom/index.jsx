import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((room) => room.id === params.id);
    if (!room) {
        alert('Room does not exist.')
    }

    return (
        <div>
            <h2>{room.title}</h2>
            <div>
                <Link to="/">Back to all rooms</Link>
            </div>
            <div className="messages-container">
                                {/* TODO */}
            </div>
        </div>
    );
}

export { ChatRoom };