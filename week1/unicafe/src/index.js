import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    lisaa = (props) => {
        console.log(props)
        if (props === "hyvä") 
            return (
                this.lisaaHyva
            )
        else if (props === "neutraali")
            return (
                this.lisaaNeutraali
            )
        else if (props === "huono")
            return ( 
                this.lisaaHuono
            )
    }

    lisaaHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }

    lisaaNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }

    lisaaHuono = () => {
        this.setState({
            huono: this.state.huono + 1
        })
    }

    render() {
        const Button = (props) => {
            const { handleClick, text } = props
            return (
              <button onClick={handleClick(text)}>
                {text}
              </button>
            )
        }

        const annaHyva = () => {
            return (
                this.state.hyva            )
        }
    
        const annaNeutraali = () => {
            return (
                this.state.neutraali
            )
        }
    
        const annaHuono = () => {
            return (
                this.state.huono
            )
        }
    
        const annaKeskiarvo = () => {
            return (
                this.state.hyva > 0 || this.state.neutraali > 0 || this.state.huono > 0 ?
                    ((this.state.hyva - this.state.huono) / 
                    (this.state.hyva + this.state.neutraali + this.state.huono)) :
                    ''
            )
        }

        const annaPositiivistenOsuus = () => {
            return (
                this.state.hyva > 0 || this.state.neutraali > 0 || this.state.huono > 0 ?
                    (this.state.hyva * 100 / 
                    (this.state.hyva + this.state.neutraali + this.state.huono)) + ' %' : ''
            )
        }

        const Statistic = (props) => {
            const { text, value } = props
            return (
                <tr>
                    <td>{text}</td>
                    <td>{value}</td>
                </tr>
            )

        }

        const Statistics = () => {
            return (
                annaHyva() > 0 || annaNeutraali() > 0 || annaHuono() > 0 ?
                    <div>
                        <table>
                            <Statistic text="hyvä" value={annaHyva()}></Statistic>
                            <Statistic text="neutraali" value={annaNeutraali()} ></Statistic>
                            <Statistic text="huono" value={annaHuono()} ></Statistic>
                            <Statistic text="keskiarvo" value={annaKeskiarvo()} ></Statistic>
                            <Statistic text="positiivisia" value={annaPositiivistenOsuus()} ></Statistic>
                        </table>
                    </div> :
                    <div><p>ei yhtään palautetta annettu</p></div>
            )
            
        }

        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                </div>
                <div>
                    <Button 
                        handleClick={this.lisaa}
                        text="hyvä" >
                    </Button>
                    <Button
                        handleClick={this.lisaa}
                        text="neutraali" >
                    </Button>
                    <Button
                        handleClick={this.lisaa}
                        text="huono" >
                    </Button>
                </div>
            
                <div>
                    <h1>
                        statistiikka
                    </h1>
                </div>
                <Statistics></Statistics>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
