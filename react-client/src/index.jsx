import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListPatient from './components/ListItem.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      patients: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/savePatient',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  componentDidMount() {
    $.ajax({
      url: '/displayPatient',
      success: (data) => {
        event.preventDefault();
        this.setState({
          patients: data.data,

        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // componentDidMount() {
  //   axios.get('/displayPatient')
  //     .then(result => {
  //       this.setState({
  //         patients: result
  //       })
  //     })
  //   .catch(error => {
  //     console.log('Error ', error);
  //   });
  // }

  render () {
    return (<div>
      <List items={this.state.items}/>
      <ListPatient patients={this.state.patients}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));