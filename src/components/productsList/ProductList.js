
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.scss'; 

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]); 
    const [displayedProducts, setDisplayedProducts] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProductList = async () => {
            try {
               
                const accessToken = sessionStorage.getItem('accessToken');

               
                const response = await axios.get(
                    'https://api.kalpav.com/api/v1/product/category/retail',
                    {
                        headers: {
                            'Authorization': accessToken 
                        }
                    }
                );

                
                setAllProducts(response.data.response);
                setDisplayedProducts(response.data.response);
            } catch (error) {
                console.error('Error fetching product list', error);
            }
        };

        fetchProductList();
    }, []); 

    const handleSearch = () => {
        const regex = new RegExp(searchTerm, 'i');
        const filteredProducts = allProducts.filter((product) =>
            regex.test(product.productCategory.productCategoryName)
        );

        setDisplayedProducts(filteredProducts);
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e) => {
       
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
