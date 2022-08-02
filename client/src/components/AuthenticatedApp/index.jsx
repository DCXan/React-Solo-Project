import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import BaseLayout from '../Baselayout';
// import { useAuth } from '../../hooks/useAuth';

function AuthenticatedApp() {

    return (
        <BrowserRouter>
            <BaseLayout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/room/:id" element={<ChatRoom />} />
                </Routes>
            </BaseLayout>
        </BrowserRouter>
        
        
        
    );
}

export { AuthenticatedApp };