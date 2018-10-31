import React from 'react';

const Quote = (props) => {
  return (
    <div className="quote-container">
      <blockquote id="quote">{props.text}</blockquote>
      <cite id="cite">{props.author}</cite>
      <div className="quote-icon" id="quoteIconTopLeft">&ldquo;</div>
      <div className="quote-icon" id="quoteIconBottomRight">&rdquo;</div>
    </div>
  );
};

export default Quote;
