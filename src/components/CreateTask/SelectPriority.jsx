import React from 'react'

const SelectPriority = ({handlePriority, selectedPriority}) => {

  if(selectedPriority===undefined){
    return (
      <select 
        name="priority-create" 
        className='priority-create' 
        onChange={(e)=>handlePriority(e.target.value)}
      >
        <option> select priority: </option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
    )
  } else {
    return (
      <select 
            name="priority-create" 
            className='priority-create' 
            onChange={(e)=>handlePriority(e.target.value)}
            defaultValue={selectedPriority}   
      >
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
        </select>
    )
  }
}

export default SelectPriority
