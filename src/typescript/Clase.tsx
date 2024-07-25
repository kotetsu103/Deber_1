import React from 'react'
interface Alumnos {
    name: string,
    edad: number,
    calificacion: number
}

export const Clase = () => {
    const alumnos: Alumnos[] = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];

    const calificaciones = alumnos.map(alumno => alumno.calificacion);

    const sumaCalificaciones = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);

    const promedioCalificaciones = sumaCalificaciones / alumnos.length;
    
  return (
    <div>
        <h2>Promedio de los estudiantes: {promedioCalificaciones.toFixed(2)}</h2>

        {alumnos.map((alumno, index) => (
                <div key={index}>
                    <p>Nombre: {alumno.name}</p>
                    <p>Calificación: {alumno.calificacion}</p>
                </div>
         ))}

    </div>


  )
}
