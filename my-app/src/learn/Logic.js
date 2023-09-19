import react from 'react'
import Button from'./Button'

export default function myName(){
    return(
        <>
        <div>
            <input type = 'text' id='name' placeholder='&nbsp;&nbsp;  What is your Name?' maxLength={20}></input>
        </div>
        <div id='pl'>Click below to know about you.</div>
        <br></br>
        <Button/>
        </>
    )
}