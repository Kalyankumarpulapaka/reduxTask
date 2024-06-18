import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '../features/products/productsSlice';
import './App.css';

const Card = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleQuantityChange = (e, product) => {
    const quantity = Number(e.target.value);
    dispatch(updateQuantity({ id: product.id, quantity }));
  };

  return (
    <div className="container">
      <div className="row Pown">
        {products.map((product) => (
          <div className="card own" key={product.id}>
            <div className="Chead">
              <div>
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
              </div>
              <div className="cBody">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="input-container">
                <div>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(e, product)}
                  />
                </div>
                <div className="pb">
                  <h3>{product.totalPrice}/-</h3>
                </div>
              </div>
            </div>
            <div className="cardbody">
              <div className="C1">
                <h5 className="text">SUBTOTAL :</h5>
                <h5 className="text">SHIPPING :</h5>
              </div>
              <div className="C2">
                <h5 className="text">${product.totalPrice}</h5>
                <h5 className="text">FREE</h5>
              </div>
            </div>
            <div className="cardbody1">
              <div className="C1">
                <h5 className="text">TOTAL :</h5>
              </div>
              <div className="C2">
                <h3 className="text1">${product.totalPrice}/-</h3>
                <h5 style={{ color: "rgba(207, 99, 99, 0.712)" }}>
                  Get daily Cash with SBI Card.
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
