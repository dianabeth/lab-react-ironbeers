import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="box-container">
          <div className="boxes">
            <Link to="/beers">
              <img src="/images/beers-bar.jpg" alt="List of All Beers" />
              <h2>List of All Beers</h2>
            </Link>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tenetur voluptatem temporibus deserunt obcaecati mollitia, at unde
              repudiandae quibusdam debitis similique suscipit delectus
              architecto itaque natus facilis laborum. Corporis, voluptas.{' '}
            </p>
          </div>
          <div className="boxes">
            <Link to="/new">
              <img src="/images/single-beer.jpg" alt="New Beer" />
              <h2>New Beer</h2>
            </Link>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tenetur voluptatem temporibus deserunt obcaecati mollitia, at unde
              repudiandae quibusdam debitis similique suscipit delectus
              architecto itaque natus facilis laborum. Corporis, voluptas.{' '}
            </p>
          </div>
          <div className="boxes">
            <Link to="/random">
              <img src="/images/random-beer.jpg" alt="Random-beer" />
              <h2>Random Beer</h2>
            </Link>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tenetur voluptatem temporibus deserunt obcaecati mollitia, at unde
              repudiandae quibusdam debitis similique suscipit delectus
              architecto itaque natus facilis laborum. Corporis, voluptas.{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
