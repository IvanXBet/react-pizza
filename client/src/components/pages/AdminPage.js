import React from 'react';
import Header from '../header/header.js';
import AdminPanel from '../admin-panel/admin-panel'

const AdminPage = () => {
    return (
        <>
            <Header authButton = {false} />
            <AdminPanel/>
        </>
    )
}

export default AdminPage;