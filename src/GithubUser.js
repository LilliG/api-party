import React, { Component } from 'react'

class GithubUser extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: {}
        }

        this.fetchUserData()
    }

    fetchUserData = () => {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
    }

    render() {
        return(
            <h3>yay</h3>
        )
    }
}

export default GithubUser