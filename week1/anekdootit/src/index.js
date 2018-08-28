import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            pisteet: [0,0,0,0,0,0],
            isVoted: false
        }
    }

//pisteet: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },


    annaRandom = () => {
        return(
            Math.floor(Math.random()*6)
        )
    }

    anna = () => {
        return(
            this.setState({
                selected: this.annaRandom()
            })
        )
    }

    vote = () => {
        const kopio = [...this.state.pisteet]
        kopio[this.state.selected] += 1
        this.setState({
            pisteet: kopio,
            isVoted: true
        })
    }

    annaParhaanIndeksi = () => {
        const kopio = [...this.state.pisteet]
        return(
            kopio.indexOf(Math.max(...this.state.pisteet))
        )
    }

    annaParasTeksti = () => {
        return(
            this.props.anecdotes[this.annaParhaanIndeksi()]
        )
    }

    annaParasMaara = () => {
        return(
            this.state.pisteet[this.annaParhaanIndeksi()]
        )
    }


    render() {
        const Button = (props) => {
            return(
                <button onClick={props.handleClick}>{props.text}</button>
            )
        }
        const MostVoted = () => {
            if(this.state.isVoted) {
                return(
                    <div>
                        <p>{this.annaParasTeksti()}</p>
                        <p>{this.annaParasMaara()}</p>
                    </div>
                )
            }
            return(
                <div>
                    <p>Ei vielä äänestetty yhtään anekdoottia.</p>
                </div>
            )
        }
        return (
            <div>
                <div>
                    {this.props.anecdotes[this.state.selected]}
                </div>
                <div>
                    <Button text="vote" handleClick={this.vote} />
                    <Button text="next anecdote" handleClick={this.anna} />
                </div>
                <div>
                    <h1>anecdote with most votes:</h1>
                    <MostVoted />
                </div>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'    
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)