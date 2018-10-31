import React from 'react';

import Quote from './Quote';
import AppNav from './AppNav';
import { generateGradient } from '../utils/js/helpers';

const appHistory = [];
let quoteQueue = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: 'Reading quotes makes you smarter.',
      quoteAuthor: 'Random Quote Machine',
    };
    this.updateQuote = this.updateQuote.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {
    const wrapper = document.querySelector('.wrapper');
    const gradientWrapper = document.querySelector('.gradient-wrapper');
    const transitGradients = () => {
      const gradient = generateGradient();
      gradientWrapper.style.backgroundColor = gradient.bg;
      gradientWrapper.style.background = gradient.str;
      setTimeout(() => {
        gradientWrapper.style.opacity = 1;
      }, 0);
      setTimeout(() => {
        wrapper.style.backgroundColor = gradient.bg;
        wrapper.style.background = gradient.str;
        gradientWrapper.style.opacity = 0;
      }, 6000);
    };
    transitGradients();
    setInterval(transitGradients, 12000);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.keyCode === 32) this.updateQuote();
      if (e.key === 'ArrowLeft' && appHistory.length) this.handleGoBack();
      if (e.key === 'ArrowUp') document.getElementById('retweetLink').click();
    });
  }

  updateQuote(e) {
    e && e.preventDefault();
    const fetchQuote = () => {
      const fetchHeader = new Headers();
      fetchHeader.append('Content-Type', 'application/x-www-form-urlencoded');
      fetchHeader.append('X-Mashape-Key', '8SCd7qeuJkmshLJzXfs9GokYABj8p1mMloWjsnimCasFx6RAxz');
      fetchHeader.append('Accept', 'application/json');

      const fetchEndPoint = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10';
      const fetchInit = {
        method: 'POST',
        headers: fetchHeader,
      };

      fetch(fetchEndPoint, fetchInit)
        .then(res => res.json())
        .then((res) => {
          quoteQueue = quoteQueue.concat(res);
          return quoteQueue.shift();
        })
        .then((res) => {
          appHistory.push(this.state);
          this.setState({
            quoteText: res.quote,
            quoteAuthor: res.author,
          });
        })
        .catch(err => new Error(err));
    };

    if (quoteQueue.length < 2) {
      fetchQuote();
    } else {
      const newQuote = quoteQueue.shift();
      appHistory.push(this.state);
      this.setState({
        quoteText: newQuote.quote,
        quoteAuthor: newQuote.author,
      });
    }
  }

  handleGoBack(e) {
    e && e.preventDefault();
    if (appHistory.length) {
      const backQuote = appHistory.pop();
      this.setState({
        quoteText: backQuote.quoteText,
        quoteAuthor: backQuote.quoteAuthor,
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="gradient-wrapper" />
        <div className="top-margin" />
        <Quote text={this.state.quoteText} author={this.state.quoteAuthor} />
        <AppNav quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor} newQuote={this.updateQuote} goBack={this.handleGoBack} />
      </div>
    );
  }
}

export default App;
