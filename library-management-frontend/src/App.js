import React, { Profiler, Suspense } from 'react';
import { Spin } from 'antd';
import './App.css';
import Login from 'containers/authentication/screens/Login';
import { Route, Router, Routes } from 'react-router-dom';
import Home from 'containers/app/screens/Home';
import AppLayout from 'containers/app/screens/Layout/AppLayout';
import ManageBook from 'containers/app/screens/ManageBook/ManageBook';
function App() {
    function estimateTime(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions, // the Set of interactions belonging to this update
    ) {
        // console.log('id: ', id);
        // console.log('phase: ', phase);
        // console.log('actualDuration: ', actualDuration);
        // console.log('baseDuration: ', baseDuration);
        // console.log('startTime: ', startTime);
        // console.log('commitTime: ', commitTime);
        // console.log('interactions: ', interactions);
    }
    return (
        <Profiler id="Main" onRender={estimateTime}>
            <Suspense fallback={<Spin />}>
              <Routes>
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/*" element={<AppLayout />} />
              </Routes>
              
            </Suspense>
        </Profiler>
    );
}

export default App;
