import React from 'react'
import './App.css'
import Books from './Books.js'


class Shelf extends React.Component {
  render() {
    return (
    <div className="bookshelf">
       <h2 className="bookshelf-title">
      		{this.props.bookShelf}</h2>
       <div className="bookshelf-books">
       <ol className="books-grid">
        {this.props.bookData.map((book, index) => (<Books key={index} book={book}
                                                   allBooks={this.props.allBooks}
                                                   ChangeBookShelf={this.props.ChangeBookShelf} />))}


                    </ol>
                  </div>
                </div>
    )
  }
}

export default Shelf
