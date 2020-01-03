import React from 'react';
import ListItem from './ListItem.jsx';
const axios = require('axios');

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: []
    }
  }

  componentDidMount() {
    axios.get('/displayPatient')
      .then(result => {
        this.setState({
          patient: result
        })
      })
    .catch(error => {
      console.log('Error ', error);
    });
  }

  render() {
    console.log( this.state.patient.data)


    return (
      <div>
        <h4> Save Patient </h4>
        <form action="/savePatient" method="post">
          Name: <input type="text" name="name" />
          Birth-Date: <input type="date" name="date"/>
          Address: <input type="text" name="address"/>
          Phone Number: <input type="number" name="phone"/>
          Disease: <input type="text" name="disease"/>
          Medication: <input type="text" name="medication"/>
          Description: <textarea></textarea>
          <input type="submit" value="Save new patient"/>
        </form>
      </div>
      )

        // this.state.patient.data.map((patient) => {
        //   // console.log(patient)
        //   return (
        //     <ListPatient patient={patient}/>
        //   )
        // })
          //  patient => <ListPatient patient={patient}/>)

  }
}


export default List;