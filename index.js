import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Header from './components/header';
import Card from './components/card';
import './style.css';

const cards = [
    {
      title: 'Visitors',
      text: 'Some Text',
      color: 'lightgreen'
    },
    {
      title: 'Shares',
      text: 'Some Text',
      color: 'lightblue'
    },
    {
      title: 'Downloads',
      text: 'Some Text',
      color: 'pink'
    },
    {
      title: 'Files',
      text: 'Some Text',
      color: 'lightgrey'
    }
  ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

  }

  handleChange = (e) => {
    this.setState({name:e.target.value});
  }
  


  render() {
    const { name } = this.state;
    const lowercasedFilter = name.toLowerCase();
    const filteredData = cards.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <div>
        <Header handleChange={this.handleChange} />
        <div className="container">
          {filteredData.filter(card => card.title !== this.state.name).map(card => {
            return <Card card={card} />
          })}
        
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
