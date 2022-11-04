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

    return <div>
        <h1>info</h1>
        <h3>{JSON.stringify(info)}</h3>
        <button onClick={changeNow}>Change!</button>
    </div>

}

export default ChangeInfo
