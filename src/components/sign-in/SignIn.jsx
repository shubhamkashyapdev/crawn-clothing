import React, { Component } from 'react';

import { signInWithGoogle } from '../../firebase/firebaseUtils';

// styles // 
import './SignIn.scss';

// components //
import FormInput from '../form-input/FormInput';
import CustomBtn from '../custom-button/CustomBtn';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' })
  }




  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title"> I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={email}
            name="email"
            id="email"
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            value={password}
            id="password"
            name="password"
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomBtn
              type="submit"
            >
              Sign in
          </CustomBtn>
            <CustomBtn
              onClick={signInWithGoogle}
              isGoogleSignIn={true}
            >
              with google
          </CustomBtn>
          </div>

        </form>

      </div>
    )
  }
}

export default SignIn;
