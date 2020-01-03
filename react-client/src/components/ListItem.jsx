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
updatePatient() {
  // this.setState({
  //   patients: newName
  // })
}
deletePatient(rowId) {
  const arrayCopy = this.state.patients.filter((row) => row.id !== rowId);
  this.setState({data: arrayCopy});

}

render() {
  console.log(this.state.patients);
   return(
   <div>
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
          <td>{patient.name}</td>
          <td>{patient.date}</td>
          <td>{patient.address}</td>
          <td>{patient.phone}</td>
          <td>{patient.disease}</td>
          <td>{patient.medication}</td>
          <td><button onClick={this.updatePatient.bind(this)}>Update</button></td>
          <td><button onClick={this.deletePatient.bind(this, patient.id)}>Delete</button></td>
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