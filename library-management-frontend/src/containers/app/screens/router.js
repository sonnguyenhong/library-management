import { lazy } from 'react';
export default {
    path: '/home',
    exact: true,
    isPrivate: true,
    component: lazy(async () => {
        return import('./Home/Home');
    }),
};
