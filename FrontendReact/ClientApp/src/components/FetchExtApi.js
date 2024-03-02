import React, { Component } from 'react';

export class FetchExtApi extends Component {
    static displayName = FetchExtApi.name;

    constructor(props) {
        super(props);
        this.state = {
            todos: [], // Initialize todos as an array
            currentPage: 1,
            todosPerPage: 10,
            searchQuery: ''
        }
    }

    API_URL = "https://jsonplaceholder.typicode.com/";

    componentDidMount() {
        this.refreshTodos();
    }

    async refreshTodos() {
        const { searchQuery } = this.state;
        const url = `${this.API_URL}todos?q=${searchQuery}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ todos: data })
            })
    }

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value }, () => {
            this.refreshTodos();
        });
    }

    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber }, () => {
            this.refreshTodos();
        });
    }

    render() {
        const { todos, currentPage, todosPerPage } = this.state;

        // Pagination logic
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
        const totalPages = Math.ceil(todos.length / todosPerPage);

        return (
            <div className="App">
                <header className="App-header">
                    <h4>This page gets all records from the jsonplaceholder.typicode.com/todos API call</h4>
                    <input type="text" placeholder="Search..." onChange={this.handleSearch} />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTodos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.userId}</td>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? 'Yes' : 'No'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={this.handlePageChange}
                    />
                </header>
            </div>
        );
    }
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(index + 1)}>{index + 1}</button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
};
