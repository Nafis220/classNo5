import React, { useState } from 'react';
import Layout from '../compnents/layout/Layout';

function Help(props) {

  const [name, setName] = useState('Nafis');
  const detail = [
      {name : 'H M Nayem',
      email:'nayem@gmail.com'},
      {name : 'Nafis Fuad',
      email:'nafis010@gmail.com'},
      {name : 'Fahim Faisal ',
      email:'fahimfaisal@gmail.com'}
  ]

    return (
        <Layout>
            <h2>Help page</h2>
            {name ?<h2>Hello {name}, I am help page</h2>:
            <h2>Hello Guest, I am help page</h2>
            }
           {detail.length ? <ul>
                {detail.map(data => <li>Name = {data.name}<br/>Email = {data.email}</li> )}
            </ul> : <p>Empty Details</p>}

       
        </Layout>
        
    );
}

export default Help;