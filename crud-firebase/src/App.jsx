import { firestore } from 'firebase';
import React from 'react';
import {firebase} from './firebase'

const App = ()  => {

  const [tareas,setTareas] = React.useState([])
  const [ tarea , setTarea ] = React.useState('')
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [Id,setId] = React.useState('')

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

  const activarEditar = (tarea) => {
    setTarea(tarea.name)
    setModoEdicion(true)
    setId(tarea.id)
  }


  const editar = async (e) => {
    e.preventDefault()
    if(tarea.trim()){
      try {
        const db = firebase.firestore()
        await db.collection("tareas").doc(Id).update({name:tarea})
        const newArray = tareas.map(item => {
          return item.id === Id ? {id: item.id , fecha: item.fecha,name: tarea}: item
        })
        setTareas(newArray)
      } catch (error) {
        console.log(error)
      }
   }else{
    console.log("vacio")
   }
   setModoEdicion(false)
   setTarea('')
   setId('')
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
                     <button 
                      className="btn btn-warning btn-sm float-right mr-2"
                      onClick={() => activarEditar(tarea)}
                     >
                       Editar
                     </button>
                  </div>
                )
              }
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={modoEdicion ? editar : agregar}>
              <input 
              type="text"
              placeholder="INgrese tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}/>
              <button
                className={
                  modoEdicion ? 'btn btn-warning btn-block' : 'btn btn-dark btn-block'
                }
                type="submit"
              >
                {
                  modoEdicion ? 'Editar' : 'Agregar'
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
