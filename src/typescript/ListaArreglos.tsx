import React from 'react'
interface Cantante {
    nombre : string;
    cancionFav: string;
    edad: number;
    Album:Album
}

interface Album {
    nombre: string;
    precio: number;
    ventas: string;
}
export const ListaArreglos = () => {
    const cantante : Cantante = {
        nombre : 'The weenkend',
        cancionFav: 'One of The Girl',
        edad: 34,
        Album: {
            nombre: 'After Hours',
            precio: 27.81,
            ventas: '3 millones de copias'
        }
    }
  return (
    <div>
        <h1>Ejercicos de Arreglos</h1>
        <br/>
        <code>
        <pre>
        {JSON.stringify(cantante, null, 2)}
        </pre>
      </code>
    </div>
  )
}