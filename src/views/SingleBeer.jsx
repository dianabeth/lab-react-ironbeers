import React, { Component } from 'react';
import { getBeer } from './../services/LoadLogic';

class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    getBeer(this.props.match.params.id)
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
      <div className="SingleBeer">
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

export default SingleBeer;
