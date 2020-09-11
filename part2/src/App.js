import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [ persons, setPersons ] = useState([
      { id:1, name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
  
    const addPerson = (event) => {
      event.preventDefault()
      
      const personObject = {
        name:newName,
        // date: new Date().toISOString(),
         id: persons.length +1,
      }
      if(persons.some(e => e.name===newName)){
        alert(`${newName} is already added to phonebook.`);
      }else{
        setPersons(persons.concat(personObject))
        
      }
      setNewName('')
    }

    
  
    const handlePersonChange = (event)=>{
        console.log(event.target.value)
        if(persons.name===event.target.value){
          alert(event.target.value," is already on the list")
        }else setNewName(event.target.value)
    }
    const displayName = ()=> persons.map(p=>
      <li key={p.id}>{p.name}</li>
    )

    
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} 
                          onChange={handlePersonChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          {displayName()}
        </ul>
      </div>
    )
  }


ReactDOM.render(
  <App  />,
  document.getElementById('root')
)