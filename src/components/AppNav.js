import React from 'react';

const AppNav = (props) => {
  return (
    <nav id="appNav">
      <ul className="inline-list">
        <li>
          <a href="/back/" className="quote-control-link" onClick={props.goBack}>
            <span id="leftArrow" className="icon-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" width="28" height="28" className="flip-back"><path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" fill="var(--text-color)"/></svg>
            </span>
            Back
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/intent/tweet?hashtags=quoteoftheday&text=${encodeURIComponent(`"${props.quoteText}" -${props.quoteAuthor}.`)}`} className="quote-control-link" target="_blank" rel="noopener noreferrer" id="retweetLink">
            <span id="upArrow" className="icon-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" width="28" height="28" className="flip-up"><path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" fill="var(--text-color)"/></svg>
            </span>
            Tweet
          </a>
        </li>
        <li>
          <a href="/newquote/" className="quote-control-link" onClick={props.newQuote}>
            <span id="rightArrow" className="icon-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" width="28" height="28"><path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" fill="var(--text-color)"/></svg>
            </span>
            New
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
