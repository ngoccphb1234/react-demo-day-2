import React, {useState} from "react";

const userInfo = {
    'name': 'ngoc',
    'age': 99
}

function ChangeInfo() {
    const [info, setInfo] = useState(userInfo);

    function changeNow() {
        return setInfo({
            ...info,
            'gender': 'male'
        })
    }

    function removeNow() {
        return setInfo(userInfo)
    }

    return <div>
        <h1>info</h1>
        <h3>{JSON.stringify(info)}</h3>
        <button onClick={changeNow} style={{margin: '0 20px'}}>Add gender</button>
        <button onClick={removeNow}>Remove gender</button>
    </div>

}

export default ChangeInfo
