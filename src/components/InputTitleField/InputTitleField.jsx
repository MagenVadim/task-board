import React from 'react'
import styles from './InputTitleField.css'

export const InputTitleField = ({title, handleTitle}) => {
  return (
    <div className="title-create-container">
      <div className="title-create-type">title:</div>
        <div className="input-title-container">
          <label className='input-field'>
            <input 
              type="text" 
              name="input-text"
              className='input-text'
              value={title}
              onChange={e=>handleTitle(e.target.value)}
            />
          </label>
      </div>
    </div>
  )
}

