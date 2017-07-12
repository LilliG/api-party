import React, { Component } from 'react'
import './Pokéapi.css'
import { Route } from 'react-router-dom'
// import Pokémon from './Pokémon'

class Pokéapi extends Component {
    state = {
        pokémon: ''
    }

    handleChange = (ev) => {
        this.setState({ pokémon: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokéapi/${this.state.pokémon}`)
        this.setState({ pokémon: '' })
    }

    render() {
        return (
        <div className="pokéapi">
            <img 
            className="pokéball" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2000px-Pok%C3%A9_Ball_icon.svg.png"
            alt="pokéball"
            />
            <h1>
                Pokéapi
            </h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <input
                    type="text"
                    value={this.state.pokémon}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">Look up Pokémon</button>
            </div>
            </form>
            {/*<Route path="/pokéapi/:pokémon" component={Pokémon} />*/}
            <Route exact path="/pokéapi" render={() => <h3>Please enter a Pokémon to search on Pokéapi.</h3>} />
        </div>
        )
    }
}

export default Pokéapi