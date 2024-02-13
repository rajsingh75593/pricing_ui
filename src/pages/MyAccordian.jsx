import React, { useState } from 'react'

export const MyAccordian = (props) => {

    const [show, setShow] = useState(false)


    return (
        <>
            <div className="main-heading">
                <p className='dropdown_box' onClick={() => setShow(!show)}> {props.question} {show ? "-" : "➕"}</p>
            </div>
            <div className="answer-box">
                {show && <p className='my-answers'>{props.answer}</p>}
            </div>
        </>

    )
}