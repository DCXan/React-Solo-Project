import { AuthenticatedApp } from '../components/AuthenticatedApp';
import { UnauthenticatedApp } from '../components/UnauthenticatedApp';
// import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import './FirebaseChat.css';

function FirebaseChat() {
    // const { user } = useAuth();
    const isAuth = useSelector((state) => state.authStatus.isAuth)
    console.log(isAuth)
    return (
        <div className="container">
            <h1>React Chat App</h1>
            {isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default FirebaseChat;