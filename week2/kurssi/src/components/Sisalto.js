import React from 'react'
import Osa from './Osa'

const Sisalto = ({ kurssi }) => kurssi.osat.map(osa => <Osa osa={osa} />)

export default Sisalto