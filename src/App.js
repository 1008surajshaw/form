import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
  const [formData,setFormData] =useState( {
    firstName:""
  })
return(
  <div>
    <form >
      <label htmlFor='firstName'>First Name</label>
      <input
      type="text"
      placeholder='suraj'
      id='firstName'
      name='firstName'
      value={formData.name}
      onChange={changeHandler}
      />
      <br/>
      <br/>
    <label htmlFor="lastName">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Babbar"
      value={formData.lastName}
      onChange={changeHandler}
     
    />

    <br/>
    <label htmlFor="email">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="love@abcd.com"
      value={formData.email}
      onChange={changeHandler}
     
    />
 <br/>
 <label htmlFor='country'>Country</label>
 <br/>

 <select
  id='country'
  name='country'
  value={formData.country}
  onChange={changeHandler}
 >
 <option>India</option>
 <option>United States</option>
 <option>Canada</option>
 <option>Mexico</option>
</select>

<br/>

<input
 type="text"
 name='streetAddress'
 id='stressAddress'
 value={formData.streetAddress}
 onChange={changeHandler}
 placeholder="B-25c"
 /> 
 <br/>
 <br/>
 

    </form>
  </div>
)
}

export default App;
