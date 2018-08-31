import React from 'react'

const Yhteensa = ({ kurssi }) => {
    const summa = (yhteensa, maara) => yhteensa + maara
    const yhteensa = () => kurssi.osat.map(osa => osa.tehtavia).reduce(summa)
    
    return (
        <p>yhteensä {yhteensa()} tehtävää</p>
    )
}

export default Yhteensa