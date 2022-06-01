import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from "./components/PizzaForm";
import * as yup from 'yup';
import formSchema from "./validation/formSchema";
import FormErrors from "./components/FormErrors";
import Pizza from "./components/Pizzas";
import axios from 'axios';

const initialData = {
  name: '',
  dropdown: '',
  pepperoni: false,
  mush: false,
  fetta: false,
  italian: false,
  special: '',
} 
const initialErrors = {
  name: '',
  dropdown: '',
}

const App = () => {
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [orderedPizza, setOrderedPizza] = useState({initialData})

  const validateInput = (name, value) =>{
    yup.reach(formSchema, name).validate(value)
      .then(()=> {setFormErrors({...formErrors, [name]: ''})})
      .catch(err=> {setFormErrors({...formErrors, [name]: err.errors[0]})})
  }

  const formUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({...formData, [name]: value});
    if(e.target.type === 'text')validateInput(e.target.name, e.target.value);
    console.log(formData);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/orders', formData)
      .then(res =>{setOrderedPizza(res.data)})
      .catch(err =>{console.log(err)})
  }

  return (
    <>
      <Switch>
        <Route path='/pizza'>
          <FormErrors errors={formErrors} />
          <PizzaForm values={formData} update={formUpdate} submit={formSubmit} />
          <Pizza values={orderedPizza} />
        </Route>
        <Route path='/'>
          <Link id="order-pizza" to="/pizza">Order Pizza!</Link>
        </Route>
      </Switch>
    </>
  );
};
export default App;
