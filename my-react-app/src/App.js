// src/App.js
import React, { useState ,useEffect} from 'react';
import Header from './header';
import './App.css';
import Footer from './Footer';
import SecondFooter from './SecondFooter'; 

function App() {
  const [filterVisible, setFilterVisible] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <div className="item-filter-section">
        <div className="item-count-filter">
          <span className="item-count">3425 Items</span>
          <span className="filter-toggle" onClick={toggleFilter}>
            {filterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
          </span>
        </div>
        <div className="sort-dropdown">
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div >
      <div className="main-content">
      {filterVisible && (
        <div className="filter-section">
          <div className="filter-item">
            <input type="checkbox" id="customizable" />
            <label htmlFor="customizable">CUSTOMIZABLE</label>
          </div>
          <div className="filter-item">
            <label htmlFor="idealFor">IDEAL FOR</label>
           
            <select id="idealFor">
              <option>Unselect all</option>
              <option>Men</option>
              <option>Women</option>
              <option>Baby and kids</option>
            </select>
           
          </div>
          <div className="filter-item">
            <label htmlFor="occasion">OCCASION</label>
          
            <select id="occasion">
              {/* Add your options here */}
              <option>Unselect all</option>
            </select>
            
          </div>
          <div className="filter-item">
            <label htmlFor="work">WORK</label>
          
            <select id="work">
              {/* Add your options here */}
              <option>Unselect all</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="fabric">FABRIC</label>
         
            <select id="fabric">
              {/* Add your options here */}
              <option>Unselect all</option>
            </select>
           
          </div>
          <div className="filter-item">
            <label htmlFor="segment">SEGMENT</label>
          
            <select id="segment">
              {/* Add your options here */}
              <option>Unselect all</option>
            </select>
          
          </div>
          <div className="filter-item">
            <label htmlFor="suitableFor">SUITABLE FOR</label>
         
            <select id="suitableFor">
              {/* Add your options here */}
              <option>Unselect all</option>
            </select>
           
          </div>
          <div className="filter-item">
            <label htmlFor="rawMaterials">RAW MATERIALS</label>
           
            <select id="rawMaterials">
              {/* Add your options here */}
              <option>Unselect all</option>
            </select>
            
          </div>
          <div className="filter-item">
            <label htmlFor="pattern">PATTERN</label>
          
            <select id="pattern">
              {/* Add your options here */}
              <option>Unselect all</option>
            </select>
            
          </div>
        </div>
      )}
        <div className="product-section">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>${product.price}</p>
              
                {product.rating?.count === 0 && <p className="out-of-stock">Out of Stock</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <SecondFooter /> 
    </div>
  );
}

export default App;
