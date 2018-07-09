import React from 'react'
import './App.css'
import Search from './Search.js'
import BookShelfMenu from './BookShelfMenu.js'

class Books extends React.Component {
  render() {
    return(
     <li>
       <div className="book">
       <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.book.imageLinks.smallThumbnail+')' }}> </div>
                <BookShelfMenu ChangeBookShelf={this.props.ChangeBookShelf} book={this.props.book} allBooks={this.props.allBooks}/>

               </div>
                  <div className="book-title">{this.props.book.title}</div>
                           { this.props.book.authors.map( (author, index) => (<div key={index} className="book-authors"> {author} </div> )) }

                  </div>
             </li>
    )
  }
}

export default Books
