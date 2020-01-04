import React from 'react';
// import ListItem from './ListItem.jsx';

class List extends React.Component {

  render() {
    return (
      <div >
        <h4> Add Patient </h4>
        <form action="/savePatient" method="post" id="register">
          <div class="row" id="register">
          <div class="form-group ">
            <label for="exampleInputName">Name: </label>
            <input type="text" class="form-control" name="name" />

            <label for="exampleInputDate">Birth-Date: </label>
            <input type="date" class="form-control" name="date" />
          </div>
          <div class="form-group ">

            <label for="exampleInputAddress">Address: </label>
            <input type="text" class="form-control" name="address" />

            <label for="exampleInputNumber">Phone Number:</label>
            <input type="number" class="form-control" name="phone" />
          </div>
          <div class="form-group">
            <label for="exampleInputDisease">Disease: </label>
            <input type="text" class="form-control" name="disease" />

            <label for="exampleInputMedication">Medication: </label>
            <input type="text" class="form-control" name="medication" />

          </div>
          <div class="form-group">
            <label for="exampleInputDescription">Description: </label>
            <input type="text" class="form-control" name="description" />

          </div>

          <button type="submit" class="btn " >Add new Patient</button>
          </div>
          </form>
      </div>
      )
  }
}


export default List;