import React from 'react';
const axios = require('axios');

class ListPatient extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    patients: []
  }
}

componentDidMount() {
  axios.get('/displayPatient')
    .then(result => {
      //console.log(result)
      this.setState({
        patients: result.data
      })
    })
  .catch(error => {
    console.log('Error ', error);
  });
}


render() {
  console.log(this.state.patients);
   return(
   <div class="direction">
        <h4> Patient List </h4>

     <table class="table">
      <thead>
        <tr>
          <th >Name</th>
          <th >Date of Birth</th>
          <th >Address</th>
          <th >Phone</th>
          <th >Disease</th>
          <th >Medication</th>
        </tr>
      </thead>
      <tbody>
      {this.state.patients.map(patient => {
        return (
        <tr>
          <td id="hide">{patient.id}</td>
          <td>{patient.name}</td>
          <td>{patient.date}</td>
          <td>{patient.address}</td>
          <td>{patient.phone}</td>
          <td>{patient.disease}</td>
          <td>{patient.medication}</td>

        </tr>
      )
      })}

      </tbody>
    </table>
   </div>

   )
  // return (
  //   <div>
  //     {pat}
  //   </div>

  // )
  // return null;

}

}


export default ListPatient;