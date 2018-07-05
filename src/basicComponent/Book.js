import React from 'react';
import '../assets/css/basic/book.css';

class Book extends React.Component{
    render() {
        return (
            <div className="BookList">
                {
                    this.props.B_List.map((book, index) => {
                        return  <div className="book-cell" key={index}>
                                    <img className="bookImage" src={book.avatar} alt="avatar" />
                                    <div className="textContent">
                                        <p className="book-username">{book.book_name}</p>
                                    </div>
                                    <button type="button" style={this.props.StyleCss} className="attention">{this.props.BtnText}</button>
                                </div>
                    })
                }
            </div>
        )
    }
}

export default Book;