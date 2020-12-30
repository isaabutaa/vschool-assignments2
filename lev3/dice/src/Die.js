import React from "react"

export default function Die(props) {

    let whichDie
    props.dieClass === "first-face" ?
        whichDie = <span className="dot"></span> 
        : props.dieClass === "second-face" ?
            whichDie = <>
                <span className="dot"></span>
                <span className="dot"></span>
            </>
            : props.dieClass === "third-face" ?
                whichDie = <>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </>
                : props.dieClass === "fourth-face" ?
                    whichDie = <>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="column">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </>
                    : props.dieClass === "fifth-face" ?
                        whichDie = <>
                            <div className="column">
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <div className="column">
                                <span className="dot"></span>
                            </div>
                            <div className="column">
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </>
                        : props.dieClass === "sixth-face" ?
                            whichDie = <>
                                <div className="column">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <div className="column">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </>
                            : whichDie = null

    return (
        <div className={`die ${props.dieClass}`}>
            {whichDie}
        </div>
    )
}