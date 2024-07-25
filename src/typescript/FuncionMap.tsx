import React from 'react'

export const FuncionMap = () => {
    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const nArreglo: number[] = arreglo.map(valor => valor / 5);
  return (
    <div>
        <h1>Valor del arreglo divido para 5</h1>
        <br />
        <h4>Los Valores son: {arreglo.join(', ')}</h4>
        <br />
        <h4>El resultado es: {nArreglo.join(', ')}</h4>
        </div>
  )
}
