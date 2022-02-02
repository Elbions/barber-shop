import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/login';

function NavigationRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default NavigationRoutes;