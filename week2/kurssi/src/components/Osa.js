import React from 'react'

const Osa = ({ osa }) => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>

export default Osa