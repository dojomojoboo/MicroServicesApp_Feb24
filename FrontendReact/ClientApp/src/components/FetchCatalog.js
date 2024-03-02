import React, { Component } from 'react';

export class FetchCatalog extends Component {
    static displayName = FetchCatalog.name;

    constructor(props) {
        super(props);
        this.state = {
            products: [], // Initialize products as an array
            currentPage: 1,
            productsPerPage: 10,
            searchQuery: ''
        }
    }

    // Ensure this is the URL that the APIGateway is running at
    API_URL = "https://localhost:7051/catalog"; 

    componentDidMount() {
        this.refreshProducts();
    }

    async refreshProducts() {
        const { searchQuery } = this.state;
        const url = `${this.API_URL}?q=${searchQuery}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data })
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value }, () => {
            this.refreshProducts();
        });
    }

    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber }, () => {
            this.refreshProducts();
        });
    }

    render() {
        const { products, currentPage, productsPerPage } = this.state;

        // Pagination logic
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        const totalPages = Math.ceil(products.length / productsPerPage);

        return (
            <div className="App">
                <header className="App-header">
                    <h4>Product Catalog</h4>
                    <p>Total Products: {products.length}</p> {/* Output total products count */}
                    <input type="text" placeholder="Search..." onChange={this.handleSearch} />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map(product => (
                                <tr key={product.productId}>
                                    <td>{product.productId}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.unitPrice}</td>
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
