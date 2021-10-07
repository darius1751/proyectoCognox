import React,{useState,useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import { useHistory } from 'react-router-dom';
const initialData = {
    identification:'',
    password:''
}

const Login = ({setUser,user,setLoading})=>{
    const [data,setData] = useState(initialData);
    
    const history = useHistory();
    useEffect(() => {
        if(user)
            history.push(`/user/${user.name}`);    
        return () => {
            
        };
    }, [user,history]);
    
        
    const handleChange = (e)=>{
        
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }
    const login = (e)=>{
        e.preventDefault();
        setLoading(true);
        helpHttp().post('http://localhost:4000/user/login',{body:data,headers:{"content-type":"application/json"}})
        .then(value=>{
            if(value.id)
                setUser(value);
            setLoading(false);
        });
    }
    return (
        <div className='login'>
            <h2>Login</h2>
            <form  noValidate autoComplete="off" onSubmit={login}>
                <input placeholder='Ingrese su numero de identificacion'  type='number' value={data.identification} onChange={handleChange} name='identification' min='1' className='text'/>
                <br/>
                <input placeholder='Ingrese su contraseña'  type='password' value={data.password} onChange={handleChange} name='password' minLength='4' maxLength='4' className='text'/>
                <br/>
                <input type='submit' className="submit"/>
            </form>
        </div>
    );
}
export default Login;   