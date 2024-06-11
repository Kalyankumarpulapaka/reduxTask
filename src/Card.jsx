import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { MessageContext } from "./App";
import "./App.css";

const Card = () => {
  const data = useContext(MessageContext);
  const products = data.products;
  const [answers, setAnswers] = useState({});

  // Initialize answers with default prices
  useEffect(() => {
    const initialAnswers = {};
    products.forEach(product => {
      initialAnswers[product.id] = product.price;
    });
    setAnswers(initialAnswers);
  }, [products]);

  const handlenum = (e, product) => {
    const k = e.target.value;
    const calculatedPrice = k >= 1 ? product.price * k : product.price;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [product.id]: calculatedPrice,
    }));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row Pown">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              {console.log(`ID: ${product.id}, Title: ${product.title}`)}
              <div className="card own">
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
                        placeholder="1"
                        onChange={(e) => handlenum(e, product)}
                      />
                    </div>

                    <div className="pb">
                      <h3>{answers[product.id]}/-</h3>
                    </div>
                  </div>
                </div>
                <div className="cardbody">
                <div className="C1">
                <h5 className="text">SUBTOTAL : </h5>
                <h5 className="text">SHIPPING : </h5>
                </div>

                <div className="C2">
                <h5 className="text"> ${answers[product.id]}</h5>
                <h5 className="text">FREE</h5>
                </div>
                
                  </div>
                  <div className="cardbody1">
                <div className="C1">
                <h5 className="text">TOTAL : </h5>
                
                </div>

                <div className="C2">
                <h3 className="text1"> ${answers[product.id]}/-</h3>
                <h5 style={{color:"rgba(207, 99, 99, 0.712)"}}>Get daily Cash with SBI Card.</h5>
                </div>
                
                  </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
