
import React from 'react';
import './App.css';
import Menu from './Menu.js';
import List from './List.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books:[
        {id:0, rating:4, title:"Harry Potter and the Chamber of Secrets", image:"https://images-na.ssl-images-amazon.com/images/I/91OINeHnJGL.jpg"},
        {id:1, rating:3, title:"Harry Potter and the Sorcerer's Stone", image:"https://images-na.ssl-images-amazon.com/images/I/710ESoXqVPL.jpg"},
        {id:2, rating:2, title:"Harry Potter And The Philosopher'S Stone", image:"https://images-na.ssl-images-amazon.com/images/I/81gP4fFhsbL.jpg"},
        {id:3, rating:1, title:"Harry Potter and the Order of the Phoenix ", image:"https://images-na.ssl-images-amazon.com/images/I/91TpLHDnuFL.jpg"}
    ]
    }
  }

  render(){
    return (
      <div className="app">
        <Menu title="Amazon Books" />
        <List items={this.state.books}/>
      </div>
    );

  }
}

export default App;
