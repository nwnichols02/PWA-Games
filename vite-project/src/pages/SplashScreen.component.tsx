import React, { useEffect, useState } from 'react'
import "../styles/signIn.css"
import 'animate.css';

export const SplashScreen = () => {
    return (
        <div className="gradient-background" style={{ height: "100vh" }}>
            {/* <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,34,144,1) 35%, rgba(0,212,255,1) 100%)", height: "100vh" }}> */}
            <div id='center' style={{ height: "inherit", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src='assets/react.svg' alt="logo" className='logo animate__animated animate__zoomIn' />
            </div>
        </div>
    )
}

export const StaticSplashScreen = () => {
    return (
        <div className="sign-in-background" style={{ height: "100vh" }}>
            {/* <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,34,144,1) 35%, rgba(0,212,255,1) 100%)", height: "100vh" }}> */}
            <div id='center' style={{ height: "inherit", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src='assets/react.svg' alt="logo" className='logo' />
            </div>
        </div>
    )
}

const loadSplashScreen = (Component: React.FC, shouldDisplaySplash: any) => {
    return () => {
        const [isLoaded, setIsLoaded] = useState(false)

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoaded(true)
            }, 5000)

            return () => clearTimeout(timer)
        }, [])


        return isLoaded ? <Component /> : <SplashScreen />
    }
}

export default loadSplashScreen;