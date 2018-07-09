import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf.js'
//import { Link } from "react-router-dom";

class BookList extends React.Component {



  render() {
    const allBooks= this.props.data;
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <Shelf
                    bookShelf="Currently Reading"
                    ChangeBookShelf={this.props.ChangeBookShelf}
                    bookData={this.props.bookData.filter(b => b.shelf === "currentlyReading")}
                    allBooks={allBooks}/>
                <Shelf
					bookShelf="Want to Read"
					ChangeBookShelf={this.props.ChangeBookShelf}
					bookData={this.props.bookData.filter(b => b.shelf === "wantToRead")}
					allBooks={allBooks}/>
                <Shelf
					bookShelf="Read"
					ChangeBookShelf={this.props.ChangeBookShelf}
					bookData={this.props.bookData.filter(b => b.shelf === "read")}
					allBooks={allBooks}/>


              </div>
            </div>
            <div className="open-search">
              <a onClick={this.props.openSearch}>Add a book</a>

            </div>
          </div>
        )
}
  }


export default BookList
