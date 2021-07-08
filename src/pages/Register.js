import React, {useState} from "react";
//import { Redirect } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  }
  const handleChangePassword = e => {
    setPassword(e.target.value);
  }
  return (
    <form>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <input
        value={email}
        type="email"
        className="form-control"
        placeholder="Email address"
        onChange={handleChangeEmail}
      />

    <input
        value={password}
        type="password"
        className="form-control"
        placeholder="Password"
        onChange={handleChangePassword}
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
