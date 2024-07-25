import React from 'react'

export const AreaCuadrado = () => {
  const pelimetro = (num1:number, num2:number, num3:number, num4:number): number =>{
    return num1 + num2 + num3 + num4  ;
}

const area = (num1:number, num2:number): number =>{
  return num1 * num2;
}

  return (
    <div>
        <h2>Area del Cuadrado</h2>
        <br />
        <span><h4>El area es: {area(5, 5)}</h4></span>
        <br />
        <span><h4>El Pelimetro es: {pelimetro(5, 5, 5, 5)}</h4></span>

    </div>
  )
}
