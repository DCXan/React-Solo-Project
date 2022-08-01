import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { loginWithGoogle } from '../../services/firebase';
import { logIn } from '../../store/authentication'

function UnauthenticatedApp() {
    
    const dispatch = useDispatch()
    
    const login = async () => {

        try {
            const user = await loginWithGoogle();
            console.log(user);
            dispatch(logIn(user))
        } catch {
            console.log("Unable to authenticate user.")
        }
    };

    return (
        <>
            <h2>Log in to join a chat room!</h2>
            <div>
                {/* <button onClick={login} className="login">
                    Login with Google
                </button> */}
                <button onClick={login} type="button" className="login-with-google-btn" >
                Sign in with Google
                </button>
            </div>
        </>
    );
}

export { UnauthenticatedApp };