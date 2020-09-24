import React, { Component } from 'react'
import api from './api.json'

// key a05a844e8abb4a617ef9f5b9c9810f26

class App extends Component {
  state = {
    moviesData: [],
  }
  apiLink =
    'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a05a844e8abb4a617ef9f5b9c9810f26'

  async componentDidMount() {
    const response = await fetch(this.apiLink)
    const apiJSON = await response.json()

    this.setState({
      moviesData: apiJSON.results,
    })
  }
  link = path => {
    return 'https://image.tmdb.org/t/p/w342' + path
  }
  render() {
    return (
      <>
        {this.state.moviesData.map(movie => (
          <>
            <article>
              <h1>{movie.title}</h1>
              <figure>
                <div className="poster">
                  <img src={this.link(movie.poster_path)}></img>
                </div>
                <div className="details">
                  <p>Release Date: {movie.release_date}</p>
                  <p>User Rating: {movie.vote_average}</p>
                  <p>Overview: {movie.overview}</p>
                </div>
              </figure>
            </article>
          </>
        ))}
      </>
    )
  }
}

export default App
