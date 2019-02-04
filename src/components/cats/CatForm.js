import React from 'react'

const CatForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Age</label>
        <div className="control">
          <input
            className="input"
            placeholder="Age"
            name="age"
            onChange={handleChange}
            value={data.age}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Colour</label>
        <div className="control">
          <input
            className="input"
            placeholder="Colour"
            name="colour"
            onChange={handleChange}
            value={data.colour}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Gender</label>
        <div className="control">
          <input
            className="input"
            placeholder="Gender"
            name="gender"
            onChange={handleChange}
            value={data.gender}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Breed</label>
        <div className="control">
          <input
            className="input"
            placeholder="Breed"
            name="breed"
            onChange={handleChange}
            value={data.breed}
          />
        </div>
      </div>

      <button className="button is-dark">Submit</button>
    </form>
  )
}

export default CatForm
