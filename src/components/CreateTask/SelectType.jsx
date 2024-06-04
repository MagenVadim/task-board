import React from 'react'

const SelectType = ({handleType, selectedType}) => {
  return (
    <select 
      name="select-create" 
      className='select-create' 
      onChange={(e)=>handleType(e.target.value)}
      defaultValue={selectedType}      
      >
        <option value='Upcoming' defaultValue>Upcoming</option>
        <option value='In Progress'>In Progress</option>
        <option value='Completed'>Completed</option>
    </select>
  )
}

export default SelectType
