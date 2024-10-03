import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Cartas from '../componenetes/Cartas';

const Cine = () => {
  const cines = [
    {
      id: 1,
      nombre: 'Cine Gran Santiago',
      direccion: 'Av. Libertador Bernardo O\'Higgins 1234, Santiago Centro',
      imagen: 'https://via.placeholder.com/300x200?text=Cine+1',
    },
    {
      id: 2,
      nombre: 'Cine Plaza Ñuñoa',
      direccion: 'Av. Irarrázaval 4567, Ñuñoa',
      imagen: 'https://via.placeholder.com/300x200?text=Cine+2',
    },
    {
      id: 3,
      nombre: 'Cine Las Condes',
      direccion: 'Av. Apoquindo 7890, Las Condes',
      imagen: 'https://via.placeholder.com/300x200?text=Cine+3',
    },
    {
      id: 4,
      nombre: 'Cine Vitacura',
      direccion: 'Av. Vitacura 3456, Vitacura',
      imagen: 'https://via.placeholder.com/300x200?text=Cine+4',
    },
    {
      id: 5,
      nombre: 'Cine La Reina',
      direccion: 'Av. Larraín 1234, La Reina',
      imagen: 'https://via.placeholder.com/300x200?text=Cine+5',
    },
    {
      id: 6,
      nombre: 'Cine Providencia',
      direccion: 'Av. Providencia 5678, Providencia',
      imagen: 'https://via.placeholder.com/300x200?text=Cine+6',
    },
  ];

  return (
    <div className="container mb-2">
      <h1 className="text-white text-center mt-4 mb-3">Salas de Cine en Santiago</h1>
      <div className="row">
        {cines.map((item) => (
          <Cartas item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cine;
