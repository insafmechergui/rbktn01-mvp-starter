import React from 'react';
// import ListItem from './ListItem.jsx';

class List extends React.Component {

  render() {
    return (
      <div >
        <h4> Save Patient </h4>
        <form action="/savePatient" method="post">
          <div class="form-group">
            Name: <input type="text" name="name" class="form-control"/>
            Birth-Date: <input type="date" name="date" class="form-control"/>
            Address: <input type="text" name="address" class="form-control"/>
            Phone Number: <input type="number" name="phone" class="form-control"/>
            Disease: <input type="text" name="disease" class="form-control"/>
            Medication: <input type="text" name="medication" class="form-control"/>
            Description: <textarea></textarea>
            <input type="submit" value="Save new patient" class="form-control"/>
          </div>
        </form>
      </div>
      )
  }
}


export default List;