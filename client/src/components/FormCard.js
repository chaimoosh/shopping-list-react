import React from 'react';

const FormCard = ({handleOnSubmit, handleOnChange, item}) => {
  return (
    <div>
      <form onSubmit={event => handleOnSubmit(event)} >
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={event => handleOnChange(event)} /> <br></br>
        <label>Amount:</label>
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          onChange={event => handleOnChange(event)} /><br></br>
          <label>Notes:</label>
          <input
            type="text"
            placeholder="Notes"
            name="notes"
            onChange={event => handleOnChange(event)} /><br></br>
        <input
          type="submit"
          value="Add Item" />
      </form>
    </div>
  )
}

export default FormCard
