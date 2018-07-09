import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books.js'

class Search extends React.Component {
  state= {
  query: '',
  books: []
  }

	updateQuery= (q) =>{
    this.setState({query: q.trim()})
      if(q){
        //console.log(this.state.books);
      BooksAPI.search(q,20).then((b)=>{
        this.setShelf(b)}).catch(()=>{
        this.setState({books: []})
      })}
        else{
            this.setState({books: []})
      }
    }

 setShelf=(books)=>{
   const modifySearchBooks= books.map((s)=>{
   s.shelf="null"
     this.props.allBooks.forEach((b)=>{
     if(s.id===b.id){
       BooksAPI.update(s,b.shelf).then(response => {
         s.shelf= b.shelf
        })
     }
   })
     return s;
 })
   this.setState({books:modifySearchBooks})
          // console.log(this.state.books);

 }
  render() {
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={this.props.BackArro}>Close</a>
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author"
					onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

			{this.state.query.length>0 && this.state.books.length>0 && (this.state.books.map( (b) =>
          (<Books key={b.id} book={b} allBooks={this.props.data} ChangeBookShelf={this.props.ChangeBookShelf}/> ) ) )
           }
</ol>
            </div>
          </div>
        )
  }
}

export default Search
