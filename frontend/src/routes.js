import React from 'react';

import AdminScreen from "./screens/AdminScreen";
import ClassDetail from "./components/Admin/ClassDetail";
import SubjectTimetable from "./components/Admin/SubjectTimetable";
import TeachersDetail from './components/Admin/TeachersDetail';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <AdminScreen />
    },
    {
        path: '/chitietlophoc/:id',
        exact: false,
        main: ({ match }) => < ClassDetail match={match} />
    },
    {
        path: '/lichthi/:id',
        exact: true,
        main: ({ match }) => <SubjectTimetable match={match} />
    },
    {
        path: '/chitietgiangvien/:id',
        exact: false,
        main: ({ match }) => < TeachersDetail match={match} />
    },
];

export default routes;