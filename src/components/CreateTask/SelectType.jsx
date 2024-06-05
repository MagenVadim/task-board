import React from 'react'

const SelectType = ({handleType, selectedType}) => {
  
  if (selectedType===undefined){
    return (
      <select 
          name="select-create" 
          className='select-create' 
          onChange={(e)=>handleType(e.target.value)}    
      >
          <option>select type:</option>
          <option value='Upcoming'>Upcoming</option>
          <option value='In Progress'>In Progress</option>
          <option value='Completed'>Completed</option>
      </select>
    )
  } else {
    return (
      <select 
          name="select-create" 
          className='select-create' 
          onChange={(e)=>handleType(e.target.value)} 
          defaultValue = {selectedType}
      >
          <option value='Upcoming'>Upcoming</option>
          <option value='In Progress'>In Progress</option>
          <option value='Completed'>Completed</option>
      </select>
    )
  }

}

export default SelectType
