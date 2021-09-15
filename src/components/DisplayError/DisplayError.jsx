import React, { useEffect, useRef } from 'react'
import useGlobal from '../../context/globalContext'
import "./Style/displayerror.css"



const DisplayError = () => {
    const errorDiv = useRef(0)
    const { errorText } = useGlobal()


    useEffect(() => {
        fadein()
        setTimeout(fadeOut, 3000)
    }, [])

    const fadein = () => {
        errorDiv.current.style.display = 'flex'
        errorDiv.current.style.opacity = '0'
        setTimeout(() => {
            errorDiv.current.style.bottom = `20px`
            errorDiv.current.style.opacity = '1'
        }, 600);
    }

    const fadeOut = () => {
        errorDiv.current.style.bottom = `0px`
        errorDiv.current.style.opacity = `0`

    }

    return (
        <>
            <div className="display-error-div" ref={errorDiv}>
                <div className="display-error-badge">!</div>
                <p className="display-error-message">
                    {errorText}
                </p>
            </div>
        </>
    )
}

export default DisplayError

