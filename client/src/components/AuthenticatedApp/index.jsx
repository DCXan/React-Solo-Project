import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import BaseLayout from '../Baselayout';
import Giphy from '../Giphy';
// import { useAuth } from '../../hooks/useAuth';

function AuthenticatedApp() {

    return (
        <BrowserRouter>
            <BaseLayout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/room/:id" element={<ChatRoom />} />
                    <Route path="/giphy" element={<Giphy />} />
                </Routes>
            </BaseLayout>
        </BrowserRouter>
        
        
        
    );
}

export { AuthenticatedApp };