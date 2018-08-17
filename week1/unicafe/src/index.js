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

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                </div>
                <div>
                    <button onClick={() => this.setState({ hyva: this.state.hyva + 1 })}>
                        hyvä
                    </button>
                    <button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>
                        neutraali
                    </button>
                    <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>
                        huono
                    </button>
                </div>
            
                <div>
                    <h1>
                        statistiikka
                    </h1>
                </div>
                <div>
                    <p>hyvä {this.state.hyva}</p>
                    <p>neutraali {this.state.neutraali}</p>
                    <p>huono {this.state.huono}</p>
                    <p>keskiarvo { this.state.hyva > 0 || this.state.neutraali > 0 || this.state.huono > 0 ?
                        ((this.state.hyva - this.state.huono) / 
                        (this.state.hyva + this.state.neutraali + this.state.huono)) :
                        '' }</p>
                    <p>positiivisia { this.state.hyva > 0 || this.state.neutraali > 0 || this.state.huonen > 0 ?
                        (this.state.hyva * 100 / 
                        (this.state.hyva + this.state.neutraali + this.state.huono)) + ' %' : '' } </p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
