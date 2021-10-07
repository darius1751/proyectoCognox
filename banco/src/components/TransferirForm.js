import React,{useState} from 'react';
const initialTransaction = {
    accountSendId:1,
    cant:0, 
    type:0,
    accountGetId:1
};
const TransferirForm = ({user,transferir}) => {
    const [transaction, setTransaction] = useState(initialTransaction);
    const {accounts} = user;
    const handleChange = (e)=>{
        setTransaction(
            {...transaction,
                [e.target.name]:e.target.value
            }
        );
    }
    return (
        <div>
            <form>
                <label htmlFor='type'>Tipo de transaccion:</label>
                <br/>
                <select value={transaction.type} onChange={handleChange} name='type' id='type' className='text'>
                    <option value='0'>A esta Cuenta</option>
                    <option value='1'>A Cuenta Externa</option>
                </select>
                <br/>
                <label htmlFor='accountSendId'>{transaction.type==='0'?"Cuenta que recibe:":"Cuenta que envia:"}</label>
                <br/>
                <select defaultValue={initialTransaction.accountSendId} name='accountSendId' id='accountSendId' onChange={handleChange} className='text'>
                    {accounts.lenght <= 0?<option>No tiene Cuentas</option>:accounts.map((account)=>
                        <option key={account.id+'Id'} value={account.id}>Cuenta: {account.id} - Dinero Actual: {account.cash}</option>
                    )}
                </select>
                <br/>
                {transaction.type ==='1' && <div>
                    <label htmlFor='accountGetId'>Cuenta que recibe:</label>
                    <br/>
                    <select defaultValue={initialTransaction.accountGetId} name='accountGetId' id='accountGetId'onChange={handleChange} className='text'>
                        {accounts.lenght <= 0?<option>No tiene Cuentas</option>:accounts.map((account)=>
                            <option key={account.id+'Id'} value={account.id}>Cuenta: {account.id} - Dinero Actual: {account.cash}</option>
                        )}
                    </select>
                    </div>
                
                }               
                <label htmlFor='cant'>Cantidad a transferir:</label>
                <br/>
                <input type='number' placeholder='Ingrese la cantidad de dinero a transferir' id='cant' min='1' name='cant' step='0.01' value={transaction.cant} onChange={handleChange} className='text'/>
                <br/>
                <input type='submit' value='Transferir' className='submit' style={{background:"linear-gradient(to right,black,yellow)"}}/>
            </form>
        </div>
    );
}

export default TransferirForm;
