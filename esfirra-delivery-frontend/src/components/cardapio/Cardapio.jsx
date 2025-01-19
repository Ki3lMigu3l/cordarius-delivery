import React, { useState } from 'react'
import './Cardapio.css'

const Cardapio = () => {
    const [mensagem, setMensagem] = useState(false);

    const selectSnack = (snack) => {
        const numero = "+5581993970384";
        const mensagem = `Olá, gostaria de selecionar o presente: *${snack}*. Por favor!`;
    
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    }

    const items = [
        { id: 1, name: "Chocolate c/ Kit Kat", price: "4,99", image: "../../assets/cardapio/chocolate-kitkat.jpg" },
        { id: 2, name: "Chocolate c/ Morango", price: "4,99", image: "../../assets/cardapio/chocolate-morango.jpg" },
        { id: 3, name: "Chocolate c/ MM", price: "4,99", image: "../../assets/cardapio/chocolate-mm.jpg" },
        { id: 4, name: "Esfiha Alho especial", price: "4,99", image: "../../assets/cardapio/alho-especial.jpg" },
        { id: 5, name: "Esfiha chocolate c/ Negresco", price: "4,99", image: "../../assets/cardapio/chocolate-negresco.jpg" },
        { id: 6, name: "Esfiha Queijo especial", price: "4,00", image: "../../assets/cardapio/queijo-especial.jpg" },
        { id: 7, name: "Frango c/ catupiry", price: "3,79", image: "../../assets/cardapio/frango-catupiry.jpg" },
        { id: 8, name: "Frango c/ cream cheese", price: "4,50", image: "../../assets/cardapio/frango-catupiry.jpg" },
      ];
    
      return (
        <div className="menu-container">
          {items.map((item) => (
            <div key={item.id} onClick={() => selectSnack(item.name)} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3>{item.name}</h3>
              <p>R${item.price}</p>
            </div>
          ))}
        </div>
      );
}

export default Cardapio
