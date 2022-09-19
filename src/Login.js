import React from 'react';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isValid: false

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    handleChange({target}) {
        const {name, value} = target;

        this.setState({

                [name]: value
            }
        )

        ;
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.isValid) {
            console.table(this.state);
        } else {
            console.log("Form not valid");
        }

    }

    handleValidation() {
        if (this.state.email === "" || this.state.email == null) {
            console.log('Email False');
            this.setState({
                isValid: false
            });
        } else if (this.state.password === "" || this.state.password == null) {
            this.setState({
                isValid: false
            });
        } else {
            this.setState({
                isValid: true
            });

        }
    }


    render() {
        return (
            <>
                <form className="row">
                    <div className="form-group col-12 text-center ">
                        <div>
                            <label htmlFor='email'>
                                <input value={this.state.email} onBlur={this.handleValidation}
                                       onChange={this.handleChange}
                                       placeholder="Email" name="email" id="email"
                                       type="email"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor='password'>
                                <input value={this.state.password} onBlur={this.handleValidation}
                                       onChange={this.handleChange}
                                       placeholder="Password" name="password" id="password"
                                       type="password"/>
                            </label>
                        </div>
                        <a>
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Sign in</button>
                        </a>
                    </div>
                </form>
            </>
        );
    }

}
