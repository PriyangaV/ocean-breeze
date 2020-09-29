import React from 'react';

export default function Banner({ title, subtitle, children, description }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <h5>{subtitle}</h5>
      {children}
    </div>
  );
}
