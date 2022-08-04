import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import Giphy from '../Giphy';
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
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
            {/* <div>
                <Link to="/">Back to all rooms</Link>
            </div> */}
            <div className="messages-container">
                <MessageList roomId={room.id} />
                <MessageInput roomId={room.id}/>
                <Giphy roomId={room.id}/>
            </div>
        </div>
    );
}

export { ChatRoom };