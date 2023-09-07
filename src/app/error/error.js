'use client'

import {useEffect} from 'react'

export default function Error({error, reset}){
    useEffect(() => {
     console.log("error is",error) 
    }, [error])

    const retryrequestHandler = () => {
        reset()
    }    

    return <div>
        <h2>OpenAI is not working. Try again!</h2>
        <button onClick={retryrequestHandler}>Retry request</button>
    </div>

}