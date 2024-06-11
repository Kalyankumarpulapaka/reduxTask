import React, { createContext } from "react";
import Card from "./Card";
export const MessageContext=createContext();

const App=()=>{
  const Jdata={
    "products": [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=400&h=300&cc=1&webp=1&q=75",
            
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8K1IZns0ec1A53nHCwRJcmLnTBtHSPcDFA&s",
          
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Z9W1kAs6ueerUuXmuo-rj9TuKQOJsLVQMw&s",
         
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6ILZe8T54yHXZ1g2kfzRMSSKCHlCLiwEwg&s",
            
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStF6XFckzyb1zfcxeusDykod47gqzSHTOXZw&s",
           
        }
    ]
}


return(
  <>
  <MessageContext.Provider value={Jdata}>
    <Card/>
  </MessageContext.Provider>
  </>
)
}


export default App;