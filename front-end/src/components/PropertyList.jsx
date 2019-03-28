import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class PropertyList extends Component {

  state = {
    properties: [],
    currentPage: 1,
    propertyPerPage: 8
  }

  componentDidMount() {
    axios.get('http://localhost:8080/properties/affordable')
      .then(data => {

        this.setState({
          properties: data.data
        })
      })
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const { properties, currentPage, propertyPerPage } = this.state;

    const indexOfLastProperty = currentPage * propertyPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertyPerPage;
    const currentProperty = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    const renderProperty = currentProperty.map(item =>
      <Link to={`/properties/${item._id}`} style={{ textDecoration: 'none', color: '#000' }} key={item.index}>
        <div className="propertyList__items--item" >
          <img src={item.picture} alt="" className="propertyList__items--img" />
          <p><b>Address: </b>{item.address}</p>
          <p><b>City: </b>{item.city}</p>
          <p className="propertyList__items--price"><b>Price: </b>${item.price}</p>
        </div>
      </Link>
    )

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(properties.length / propertyPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="propertyList__items--number"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="propertyList">
        <div className="propertyList__container">
          <h1 className="propertyList__header">Looking for a rental property?</h1>
          <h2 className="propertyList__text">20 most affordable apartments and houses</h2>

          <div className="propertyList__items">
            {renderProperty}

          </div>

        </div>


        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>


      </div>
    )
  }
}








// class TodoApp extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     todos: ['a','b','c','d','e','f','g','h','i','j','k'],
//   //     currentPage: 1,
//   //     todosPerPage: 3
//   //   };
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   // handleClick(event) {
//   //   this.setState({
//   //     currentPage: Number(event.target.id)
//   //   });
//   // }

//   render() {
//     // const { todos, currentPage, todosPerPage } = this.state;

//     // Logic for displaying current todos
//     // const indexOfLastTodo = currentPage * todosPerPage;
//     // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     // const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//     const renderTodos = currentTodos.map((todo, index) => {
//       return <li key={index}>{todo}</li>;
//     });

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map(number => {
//       return (
//         <li
//           key={number}
//           id={number}
//           onClick={this.handleClick}
//         >
//           {number}
//         </li>
//       );
//     });

//     return (
//       <div>
//         <ul>
//           {renderTodos}
//         </ul>
//         <ul id="page-numbers">
//           {renderPageNumbers}
//         </ul>
//       </div>
//     );
//   }
// }


// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('app')
// );