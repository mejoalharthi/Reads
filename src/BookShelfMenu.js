import React from 'react'
import './App.css'
import Books from './Books.js'
//import Shelf from './Shelf.js'
class BookShelfMenu extends React.Component {
  render() {
    let bookShelf;
    const allBooks= this.props.allBooks;

    if(this.props.book.shelf){
    	bookShelf =this.props.book.shelf;
    }else{
    	bookShelf="Null";
    }

    for(let i=0 ; i< allBooks.length ; i++){
     if( this.props.book.id === i.id){
        bookShelf= i.shelf
      }
    }


    return(
      <div className="book-shelf-changer">
                <select value={bookShelf} onChange={(e) => (this.props.ChangeBookShelf(this.props.book, e.target.value))}>
					<option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                       <option value="wantToRead"> Want to Read</option>
                   		<option value="read">Read</option>
                  		 <option value="none">None</option>
                </select>
               </div>
      )
  }
}
export default BookShelfMenu
