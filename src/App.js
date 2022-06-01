import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import * as yup from "yup";
import formSchema from "./validate/formSchema";
import Errors from "./Errors";

const initialData = {
  name: "",
  dropdown: "",
  pepperoni: false,
  mush: false,
  fetta: false,
  italian: false,
};
const initialErrors = {
  name: "",
  dropdown: "",
};

const App = () => {
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const validateInput = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const formUpdate = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [name]: value });
    if (e.target.type === "text") validateInput(e.target.name, e.target.value);
    console.log(formData);
  };

  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Errors errors={formErrors} />
          <PizzaForm values={formData} update={formUpdate} />
        </Route>
        <Route path="/">
          <Link id="order-pizza" to="/pizza">
            Order Pizza!
          </Link>
        </Route>
      </Switch>
    </>
  );
};
export default App;
