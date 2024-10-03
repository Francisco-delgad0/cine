import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Cartas = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white">
        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default Cartas;