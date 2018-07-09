import React from 'react'
//import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import Search from './Search.js'
class BooksApp extends React.Component {
  state = {
    Booksdata : [],
    OpenSearch: false
  }
componentDidMount(){
  BooksAPI.getAll().then(data => {
   this.setState({
     Booksdata : data
   });
});
}

fetchBooksOnShelf(NewBooks) {
    BooksAPI.getAll().then(NewBooks => {
      this.setState({
        Booksdata: NewBooks
      });
    });
  }

ChangeBookShelf = (book, NewShelf) => {
   		BooksAPI.update(book,NewShelf).then(respones =>{
          book.shelf= NewShelf;
          this.fetchBooksOnShelf(this.state.Booksdata.filter(b => b.id !== book.id).push(book));

        })
};

  render() {

    return (
      <div className="app">
       {this.state.OpenSearch ? (<Search BackArro={() => this.setState({ OpenSearch: false })} ChangeBookShelf={this.ChangeBookShelf} data={this.state.Booksdata} />) :
		(<BookList bookData={this.state.Booksdata} ChangeBookShelf={this.ChangeBookShelf}  data={this.state.Booksdata} openSearch={() => this.setState({ 			OpenSearch: true })}/>)}

      </div>
    )
  }
}

export default BooksApp
