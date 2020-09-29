import React, { Component } from 'react';
import Title from './Title';
import about1 from '../images/about-1.jpeg';
import about2 from '../images/about-2.jpeg';

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <Title title="about" />
        <div className="about-center">
          <div className="about-img-container">
            <div className="about-one">
              <img src={about1} alt="about" />
            </div>
            <div className="about-two">
              <img src={about2} alt="about" />
            </div>
          </div>
          <div className="about-details">
            <h2>
              Rich in Heritage. Best in Comfort. Taking comfort to the highest
              level
            </h2>
            <p>
              With the everlasting beauty that stood for many years come to fine
              resort to serve its name. Ocean Breeze is the right choice
              visitors who are searching for a combination of charm, peace and
              quiet, and a convinient position from which to explore
              surroundings.
            </p>
            <a href="/rooms" className="btn-primary">
              Book Now
            </a>
          </div>
        </div>
      </section>
    );
  }
}
