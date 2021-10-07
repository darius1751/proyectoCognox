import React,{useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import Nav from '../components/Nav';
const User = ({user,setUser}) => {
    const {name} = useParams();
    const history = useHistory();
    useEffect(() => {
        if(name !== user.name){
            history.push(`/user/${user.name}`);
        }    
        return () => {
            
        };
    }, [name,history,user]);
    return (
        <div>
            <Nav name={name} setUser={setUser}/>
        </div>
    );
}

export default User;
