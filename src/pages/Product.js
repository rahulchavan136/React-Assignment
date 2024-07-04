import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import './ProductList.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                const categorySet = new Set(data.map((product) => product.category));
                setCategories([...categorySet]);
            });
    }, []);

    const handleFilter = (filters) => {
        const { category, priceRange, rating } = filters;
        let filtered = products;

        if (category) {
            filtered = filtered.filter((product) => product.category === category);
        }
        if (priceRange) {
            filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);
        }
        if (rating) {
            filtered = filtered.filter((product) => product.rating.rate >= rating);
        }

        setFilteredProducts(filtered);
    };

    return (
        <Container>
            <h1 className="my-4">Product Filter</h1>
            <ProductFilter categories={categories} onFilter={handleFilter} />
            <ProductList products={filteredProducts} />
        </Container>
    );
};

export default Product;
