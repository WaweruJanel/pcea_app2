import { RouteObject } from 'react-router-dom';


// Layout Types
import { DefaultLayout } from '../Layouts';


//pages
import { Home } from '../pages';
import AboutUs from '../pages/About';
import Ministries from '../pages/Ministries';
import Contact from '../pages/Contact';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';




//difine routes`
const routes: RouteObject[] = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <AboutUs /> },
            { path: 'ministries', element: <Ministries /> },
            { path: 'contact', element: <Contact /> },
        ]
    },
    //auth routes
    {
        path: '/',
        children: [
            { path: '/login', element: <Login /> },
            {path: '/register', element: <SignUp />},

        ]
    },
    {
        path: '*',
        element: <DefaultLayout />,
    }
];

export default routes;