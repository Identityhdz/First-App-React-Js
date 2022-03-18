
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
    ],
      copyBooks: []
    }
  }

  componentDidMount() {
    this.initBooks()
  }

  initBooks = () =>{
    this.setState((state, props)=> ({
      copyBooks: [... state.books]
    }))
  }

  onAdd = (dataNewBook) =>{

    let newTempBooks = [...this.state.books];
    const ultimateIdBook = newTempBooks[newTempBooks.length -1].id ++;
    dataNewBook['id'] =  ultimateIdBook;
    newTempBooks.push(dataNewBook);

    this.setState({books: [ ... newTempBooks]});
    this.initBooks()

  }

  onSearch = (query) =>{
    if(query === ""){
      this.initBooks()
    }else{
      const arraySearchTemp = [... this.state.books]

      let arrayResult = []

      // Search books in array Books
      arraySearchTemp.forEach(book =>{
          if (book.title.toLowerCase().indexOf(query) > -1){
            arrayResult.push(book)
          }
      })

      this.setState({copyBooks: [... arrayResult]})
      
    }
  }

  onUpdateRating = (item) =>{
    let arrayUpdateTemp =  [... this.state.books]
    const indexToUpdate = arrayUpdateTemp.forEach(item => item.id === item.id)

    arrayUpdateTemp[indexToUpdate].title = item.title
    arrayUpdateTemp[indexToUpdate].image = item.image
    arrayUpdateTemp[indexToUpdate].rating = item.rating

    this.setState({books: [... arrayUpdateTemp]})
    this.initBooks()

  }

  render(){
    return (
      <div className="app">
        <Menu title="Amazon Books" onadd={this.onAdd} onsearch={this.onSearch} />
        <List items={this.state.copyBooks} onSearch={this.onUpdateRating}/>
      </div>
    );

  }
}

export default App;
