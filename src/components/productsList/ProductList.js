// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.scss'; // Import the SCSS file

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]); // Store all products
    const [displayedProducts, setDisplayedProducts] = useState([]); // Store filtered products for display
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch the product list from the API
        const fetchProductList = async () => {
            try {
                // Retrieve the access token from sessionStorage
                const accessToken = sessionStorage.getItem('accessToken');

                // Make a GET request to the product list API with the access token as a header
                const response = await axios.get(
                    'https://api.kalpav.com/api/v1/product/category/retail',
                    {
                        headers: {
                            'Authorization': accessToken // Use the access token directly
                        }
                    }
                );

                // Set both allProducts and displayedProducts initially
                setAllProducts(response.data.response);
                setDisplayedProducts(response.data.response);
            } catch (error) {
                console.error('Error fetching product list', error);
            }
        };

        fetchProductList();
    }, []); // The empty dependency array ensures that this effect runs only once on component mount

    const handleSearch = () => {
        // Filter the products based on the searchTerm using case-insensitive regular expression
        const regex = new RegExp(searchTerm, 'i');
        const filteredProducts = allProducts.filter((product) =>
            regex.test(product.productCategory.productCategoryName)
        );

        // Set the filtered products in the state
        setDisplayedProducts(filteredProducts);
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e) => {
        // Handle search when the user presses Enter
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='product-container'>
            <h2 className='product-header'>Product List</h2>
            <div className='product-searchBar-container'>
                <label>Search:
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        onKeyPress={handleKeyPress}
                        placeholder='Search products ( by name )'
                    />
                </label>
                <button onClick={handleSearch} className='search-button'>Search</button>
            </div>
            <div className="product-list">
                {displayedProducts.map((product) => (
                    <div key={product.productCategory.productCategoryId} className="product-card">
                        <img src={product.productCategory.productCategoryImage} alt={product.productCategory.productCategoryName} />
                        <div className="product-info">
                            <h3>{product.productCategory.productCategoryName}</h3>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
