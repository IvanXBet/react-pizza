import React from 'react';
import Header from '../header/header.js';
import WorkerPanel from '../worrker-panel/worker-panel'

const WorkerPage = () => {
    return (
        <>
            <Header authButton = {false} />
            <WorkerPanel/>
        </>
    )
}

export default WorkerPage;