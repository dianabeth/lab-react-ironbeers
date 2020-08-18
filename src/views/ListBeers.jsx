import React, { Component } from 'react';
import { loadBeers } from './../services/LoadLogic';
import { Link } from 'react-router-dom';

class ListBeers extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: [],
    };
  }

  componentDidMount() {
    loadBeers()
      .then((data) => {
        this.setState({
          loaded: true,
          beers: data,
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //image, name, tagline, contributed_by
  render() {
    const beers = this.state.beers;
    return (
      <div>
        {this.state.loaded && (
          <>
            {beers.map((beer) => {
              return (
                <section>
                  <Link key={beer.id} to={`/beers/${beer.id}`}>
                    {' '}
                    <img src={beer.image_url} alt="picturesofbeers" />
                    <h2>Name: {beer.name}</h2>
                    <p>
                      {' '}
                      <strong> Tagline: </strong> {beer.tagline}{' '}
                    </p>
                    <span>
                      <strong>Created by: </strong>
                      {beer.contributed_by}{' '}
                    </span>
                  </Link>
                  <Link to="/beer/:id">
                    <p>More</p>
                  </Link>
                </section>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default ListBeers;
