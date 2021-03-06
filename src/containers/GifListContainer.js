import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            gifs: [
                
            ]
        }
    }

    handleSearch = (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&api_key=ArN4uzS13rjaqsIDlBVgOBTsFUk4ZqYO&rating=g`
        fetch(url)
            .then(res => res.json())
            .then(gifsData => {
              const urls = gifsData.data.slice(0,3).map(gif => {
                  return { title: gif.title, id: gif.id, url: gif.images.original.url}
                }) 
              this.setState({ gifs: urls })
            })
    }

    render() {
        return(
            <div>
                <h1>GifListContainer</h1>
                <GifSearch handleSearch={this.handleSearch} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}