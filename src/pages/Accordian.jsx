import React, { useState } from 'react'
import { questions } from '../api/AccordianApi'
import '../assets/css/accordian.scss'
import { MyAccordian } from './MyAccordian';

export const Accordian = () => {
    const [data, setData] = useState(questions);

  return (
    <section className='Acor-main'>
    {
        data?.map((cuerElem) => {
            const {id, question, answer} = cuerElem;
            return(<MyAccordian key={id} {...cuerElem}/>)
        })
    }

    </section>
  )
}