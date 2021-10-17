import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";

export default function LoginPage(){

    let [token, setToken] = useState('');
    let [err, setErr] = useState('')

    let dispatch = useDispatch()

    const clickHandler = async (e) => {
        let {data} = await axios.post('http://localhost:3001/api/login', {
            token: token
        })
        if (data.err){
            setErr(data.mes);
            setToken('');
        }
        else{
            dispatch({type: 'LOGIN', payload: token})
        }
    }

    return(
        <div id="login">
            <h1>Enter your client <span className="help-span"><a href="https://github.com/1KINGO1/RegularBot">*</a></span> token</h1>
            <p id="login-error">{err}</p>
            <div id="login-input-block">
                <input placeholder='token'
                       id='login-input'
                       value={token}
                       onChange={(e) => setToken(e.target.value)}
                       onFocus={() => setErr('')}/>
                <button onClick={clickHandler}>Submit</button>
            </div>
            <p id='water-mark'>Created by KINGO</p>
        </div>
    )
}