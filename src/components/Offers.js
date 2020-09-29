import React, { Component } from 'react';

import Title from './Title';
import winter from '../images/winter.jpeg';
import gather from '../images/gather.jpeg';
import wedding from '../images/wedding.jpeg';
import summer from '../images/summer.jpeg';

export default class Offers extends Component {
  state = {
    services: [
      {
        url: winter,
        title: 'Winter Package',
        info: '1st December - to - 31st Jan',
      },
      {
        url: gather,
        title: 'Get to gather Package',
        info: '1st September - to - 31st December',
      },
      {
        url: wedding,
        title: 'Wedding Offer',
        info: '1st February - to - 31st May',
      },
      {
        url: summer,
        title: 'Summer Package',
        info: '1st June - to - 31st October',
      },
    ],
  };
  render() {
    return (
      <section className="offers">
        <Title title="Special Offers" />
        <div className="offers-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="offer">
                <img src={item.url} alt={item.title} />
                <div className="details">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
