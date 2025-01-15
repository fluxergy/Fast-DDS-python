import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {socket} from "./socket"

function App() {
const [count, setCount] = useState(0)
    const [isConnected, setIsConnected] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("Unknown")
    const onConnect = () => {
        setIsConnected(true)
    }
    const onDisconnect = () => {
        setIsConnected(false)
    }

    const onStatusUpdate = (value: {
        "data": string
    }) => {
	console.log(value)
        setStatus(value?.data ?? "unknown data from server")
    }
    useEffect(() => {
        socket.on("connect", onConnect)
        socket.on("disconnect", onDisconnect)
        socket.on("status update", onStatusUpdate)
        console.log(onConnect, onDisconnect, onStatusUpdate)
        socket.connect()
        return () => {
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
            socket.off("status update", onStatusUpdate)
            console.log(onConnect, onDisconnect, onStatusUpdate)
            socket.disconnect()
        }
    })    
return (
        isConnected ? (<>
            <div>
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                    <img src={reactLogo} className="logo react" alt="React logo"/>
            </div>
            <h1>RTPS Demo</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    The analyzer status is {status}
                </button>

            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>) : (<>Hmmm</>)

    )
}

export default App
