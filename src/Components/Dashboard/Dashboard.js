import React from 'react'
import '../../App.css'

import LoginForm from '../Form/LoginForm';
import DataForm from '../Form/DataForm';

// -----------------------------------------
// This is the Entire Dashboard
// -----------------------------------------

export default function Dashboard() {
    return (

        <div>
            {/* <LoginForm />           */}
            <DataForm />          
        </div>

    );
}
