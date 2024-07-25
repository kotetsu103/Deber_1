import { useState } from "react"

export const UseStates = () => {
    const [valorContador, setValorContador] = useState<number>(0)

    const cambairContador = (numero: number) => {
        setValorContador (valorContador  + numero);
    }

    const cambairContador2 = (numero: number) => {
        setValorContador (valorContador - numero);
    }
    
  return (
    <div>
      <h3>Contador: <small>{valorContador}</small></h3>
      <button className="btn btn-primary" onClick={() => cambairContador(5)}> +5 </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => cambairContador2(5)}> -5 </button>
    </div>
  )
}
