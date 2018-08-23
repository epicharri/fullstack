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
              <button onClick={handleClick}>
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
            console.log('Statistics text ja value: ', text, value)
            return (
                <p>{text} {value}</p>
            )

        }

        const Statistics = () => {
            console.log(this.annaHyva)         
            return (
                <div>
                    <Statistic text="hyvä" value={annaHyva()}></Statistic>
                    <Statistic text="neutraali" value={annaNeutraali()} ></Statistic>
                    <Statistic text="huono" value={annaHuono()} ></Statistic>
                    <Statistic text="keskiarvo" value={annaKeskiarvo()} ></Statistic>
                    <Statistic text="positiivisia" value={annaPositiivistenOsuus()} ></Statistic>
                </div>
            )
            
        }

        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                </div>
                <div>
                    <Button 
                        handleClick={this.lisaaHyva}
                        text="hyvä" >
                    </Button>
                    <Button
                        handleClick={this.lisaaNeutraali}
                        text="neutraali" >
                    </Button>
                    <Button
                        handleClick={this.lisaaHuono}
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
