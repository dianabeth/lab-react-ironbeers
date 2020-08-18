import React, { Component } from 'react';
//import Header from './../components/Header';
import { randomBeer } from './../services/LoadLogic';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    randomBeer(this.props.match.params.id)
      .then((data) => {
        this.setState({
          beer: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const beer = this.state.beer;
    return (
      <div className="randomBeer">
        {beer && (
          <>
            <div>
              <img src={beer.image_url} alt="beerimage" />
              <h1>{beer.name}</h1>
              <p> {beer.attenuation_level} </p>
              <p> {beer.tagline} </p>
              <p> {beer.first_brewed} </p>

              <p> {beer.description} </p>
              <p> {beer.contributed_by} </p>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default RandomBeer;
