import React from 'react';
import './sign-in.scss';
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email: '', password: '' });
    } 

    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span> sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>

                    <CustomButton type="submit" > Sign in </CustomButton>
                </form>

            </div>
        )
    }

}

export default SignIn;