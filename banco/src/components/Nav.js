import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = ({name,setUser})=>{
    return(
        <header className='nav'>
            <div className='link'>
                <NavLink to={`/user/${name}`} activeClassName='active-nav' exact>
                    Inicio
                </NavLink>
            </div>
            <div className='link'>
                <NavLink to={`/transferir`} activeClassName='active-nav' exact>
                    Transferir
                </NavLink>
            </div>
            <div className='link'>
                <NavLink to={`/user/${name}/historial`} activeClassName='active-nav' exact>
                    Historial
                </NavLink>
            </div>
            <div className='link-logout'>
                <NavLink to={`/`} activeClassName='active-nav' onClick={()=>setUser(null)} exact>
                    Logout
                </NavLink>
            </div>
            
        </header>
    );
};
export default Nav;