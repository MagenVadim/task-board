import React from 'react'
import styles from './InputDescriptionField.css'

export const InputDescriptionField = ({description, handleDescription}) => {
  return (
    <div className="description-create-container">
      <div className="description-create-type">description:</div>
        <div className="input-title-container">
          <label className='input-field'>
            <textarea 
              type="text" 
              name="input-description"
              className='input-description'
              value={description}
              onChange={e=>handleDescription(e.target.value)}
            >
            </textarea>
          </label>
      </div>
    </div>
  )
}

