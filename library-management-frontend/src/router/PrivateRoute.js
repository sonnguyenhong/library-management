import { REQUEST_STATE } from '../app-configs/index';
import FullPageLoading from 'components/Loading/FullPageLoading/FullPageLoading';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TOKEN_KEY } from '../app-configs/index';

import { CHECK_VALID_TOKEN, CHECK_VALID_TOKEN_FAIL } from '../redux/actions/user';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function PrivateRoute({ component: Component, location, ...rest }) {
    const dispatch = useDispatch();
    const isAuthenticate = useSelector((state) => state.user?.verifyAuthState);
    useEffect(() => {
        (async () => {
            const accessToken = localStorage.getItem(TOKEN_KEY);
            if (accessToken) {
                if (isAuthenticate !== REQUEST_STATE.SUCCESS) {
                    dispatch(CHECK_VALID_TOKEN());
                }
            } else {
                dispatch(CHECK_VALID_TOKEN_FAIL());
            }
        })();
    }, [dispatch]);

    switch (isAuthenticate) {
        case REQUEST_STATE?.SUCCESS:
            return <Route {...rest} render={(props) => <Component {...props} />} />;
        case REQUEST_STATE?.ERROR:
            return <Redirect to={{ pathname: '/auth/login', state: { from: location } }} />;
        default:
            return <FullPageLoading />;
    }
}

export default PrivateRoute;
