import React from 'react';
import Nav from '../components/Nav';
import TransferirForm from '../components/TransferirForm';
const Transferir = ({setUser,user}) => {
    return (
        <div>
            <Nav setUser={setUser} name={user.name}/>
            <TransferirForm user={user}/>
        </div>
    );
}

export default Transferir;
