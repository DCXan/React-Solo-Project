import { AuthenticatedApp } from '../components/AuthenticatedApp';
import { UnauthenticatedApp } from '../components/UnauthenticatedApp';
import { useAuth } from '../hooks/useAuth';
import './FirebaseChat.css';

function FirebaseChat() {
    const { user } = useAuth();

    return (
        <div className="container">
            <h1>React Chat App</h1>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default FirebaseChat;