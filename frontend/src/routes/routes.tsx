import { RouteObject } from 'react-router-dom';

// Layout Types
import { AuthLayout, DefaultLayout } from '../Layouts';

// Pages
import { Home } from '../pages';
import AboutUs from '../pages/About';
import Ministries from '../pages/Ministries';
import Contact from '../pages/Contact';
import DashboardHome from '../pages/dashboard/DashboardHome';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import MembersTable from '../pages/dashboard/MembersTable';
import EventsTable from '../pages/dashboard/EventsTable';
import PrayerRequestsTable from '../pages/dashboard/PrayerRequestsTable';

// Define routes
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
    // Auth routes
    {
        path: '/',
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <SignUp /> },
        ]
    },

    // Dashboard routes
    {
        path: '/dashboard',
        element: <AuthLayout />,
        children: [
            { index: true, element: <DashboardHome /> },
            { path: 'members', element: <MembersTable /> },
            { path: 'events', element: <EventsTable /> },
            { path: 'prayers', element: <PrayerRequestsTable /> },
        ]
    },
    {
        path: '*',
        element: <DefaultLayout />,
    }
];

export default routes;
