import React, { Component } from 'react';
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaBeer,
  FaSwimmingPool,
  FaWeight,
} from 'react-icons/fa';
import Title from './Title';
import pool from '../images/pool.jpeg';
import cafe from '../images/cafe.jpeg';
import gym from '../images/gym.jpeg';
import shuttle from '../images/shuttle.jpeg';
import hiking from '../images/hiking.jpeg';
import relax from '../images/relax.jpg';

export default class Services extends Component {
  state = {
    services: [
      {
        url: hiking,
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Many trails well-marked for different levels of hiking',
      },
      {
        url: pool,
        icon: <FaSwimmingPool />,
        title: 'Swimming Pool',
        info:
          'A very nice, Big and Clean Swimming Pool, with breathtaking views',
      },
      {
        url: cafe,
        icon: <FaBeer />,
        title: 'Restaurent & Cafe',
        info:
          'The food will suit every palette. It’s fresh and appealing and the only downfall is, you will go home a few pounds heavier',
      },
      {
        url: relax,
        icon: <FaCocktail />,
        title: 'Free Massages',
        info: 'Luxury spa which also offers a steam room',
      },
      {
        url: shuttle,
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'The free shuttle outside hotel is regular and fast',
      },
      {
        url: gym,
        icon: <FaWeight />,
        title: 'Gym',
        info:
          'We lay on plenty of activities and a well equipped gym for you to burn them off',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="At a Glance" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className={`service service-${index + 1}`}>
                <img src={item.url} alt={item.title} />
                <div className="details">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
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
