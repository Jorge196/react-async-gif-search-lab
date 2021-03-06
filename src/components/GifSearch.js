import React, { Component } from 'react' 

export default class GifSearch extends Component {
    state = {
        search:''
    }

    handleChange = (event) => {
        this.setState({search: event.target.value})
    }

    hanldeSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.search)
    }

    render(){
        return(
            <form onSubmit={this.hanldeSubmit}>
                <h1>GifSearch</h1>
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="search"
                        placeholder="search for gifs" 
                        onChange={this.handleChange}
                        value={this.state.search}
                        aria-describedby="search for gifs" 
                    />
                    
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                

            </form>
        )
    }
}