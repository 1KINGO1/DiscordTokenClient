import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

let presets = [
    {
        endpoint: "/channels/YOUR CHANNEL ID HERE/messages",
        method: "post",
        body: '{"content": "your message here"}',
        title: 'Send Message'
    }
]

export default function ControlPage(){

    let [endPoint, setEndPoint] = useState('');
    let [method, setMethod] = useState('');
    let [body, setBody] = useState('')

    let [bodyJsonError, setBodyJsonError] = useState('');
    let [result, setResult] = useState('')

    let [response, setResponse] = useState("");

    let loginToken = useSelector(state => state.login.loginToken);

    const submitHandler = async () => {
        let {data} = await axios.post('http://localhost:3001/api/discord/send', {
            endpoint: endPoint,
            token: loginToken,
            method: method.toLowerCase(),
            body: body
        })
        if (data.err){
            setResponse(data.mes);
            return
        }
        else{
            setResult("Completed!")
            setResponse(JSON.stringify(data.res))
            setTimeout(() => {
                setResult('');
            }, 3000)
        }
    }

    useEffect(() => {
        if (!body){
            setBodyJsonError('');
            return
        }
        let result = false;
        try{
            let json = JSON.parse(body);
            result = true;
        }
        catch (e){}
        if (result){
            setBodyJsonError('');
        }
        else{
            setBodyJsonError('Incorrect JSON format')
        }
    }, [body])

    return(
        <div id='control-menu'>
            <h1>Control Menu</h1>
            <div id='control-content'>
                <div id='control-presets'>
                    <p style={{textAlign: "center", fontSize: "18px", borderBottom: "2px solid white"}}>Presets</p>
                    {
                        presets.map(preset =>
                            <div className='control-preset' onClick={() => {
                                setEndPoint(preset.endpoint);
                                setMethod(preset.method);
                                setBody(preset.body);
                            }}>
                                {preset.title}
                            </div>
                        )
                    }
                </div>
                <div id='control-edit'>
                    <input
                        type="text"
                        id='control-endpoint-input'
                        placeholder='Enter discord api endpoint'
                        onChange={(e) => setEndPoint(e.target.value)}
                        value={endPoint}
                    />
                    <input
                        type="text"
                        id='control-method-input'
                        placeholder='Enter request method'
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                    />
                    <p style={{color: 'red'}}>{bodyJsonError}</p>
                    <textarea
                        id='control-body-input'
                        placeholder='JSON request body'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        style={bodyJsonError ? {border: "2px solid red"} : {}}
                    />
                    <textarea
                        id='control-body-response'
                        placeholder='Response body'
                        disabled='true'
                        value={response}
                    />
                    <button id='control-submit' onClick={submitHandler}>Send <span style={{color: 'green'}}>{result}</span></button>
                </div>
            </div>
            <p id='water-mark'>Created by KINGO</p>
        </div>
    )
}