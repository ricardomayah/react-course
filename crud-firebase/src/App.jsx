import React from 'react';
import {firebase} from './firebase'

const App = ()  => {

  const [tareas,setTareas] = React.useState([])
  const [ tarea , setTarea ] = React.useState('')

  React.useEffect(() => {

    const obtenerDatos = async () => {

      try {
        
        const db = firebase.firestore()
        const data = await db.collection('tareas').get()
        
        console.log(data.docs)
        const arrayData = data.docs.map( doc => ({ id: doc.id , ...doc.data()}))
        console.log(arrayData)

        setTareas(arrayData)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerDatos();
  },[])

  const agregar = async (e) => {
    e.preventDefault()

    if(!tarea.trim()){
      console.log("esta vacio")
      return
    }

    try {
      
      const db = firebase.firestore()
      const nuevaTarea = {
        name: tarea,
        fecha: Date.now()
      }

      const data = await db.collection("tareas").add(nuevaTarea)

      setTareas([
        ...tareas,
        {...nuevaTarea, id: data.id}
      ])
      
      setTarea('')

    } catch (error) {
      console.log("error")
    }
  }

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore()
      await db.collection("tareas").doc(id).delete()
      const newArray = tareas.filter(element => element.id !== id)
      setTareas(newArray)

    } catch (error) {
      console.log("Error")
    }
  }

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="list-group">
              {
                tareas.map( tarea => 
                  <div key = {tarea.id} className="list-group-item">
                     {tarea.name}
                     <button className="btn btn-danger btn-sm float-right"
                     onClick={()=>eliminar(tarea.id)}
                     >
                       Eliminar
                     </button>
                     <button className="btn btn-warning btn-sm float-right mr-2">
                       Editar
                     </button>
                  </div>
                )
              }
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={agregar}>
              <input 
              type="text"
              placeholder="INgrese tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}/>
              <button
                className="btn btn-dark btn-block"
                type="submit"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
