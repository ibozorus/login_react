import React from 'react';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "",
            password : ""

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target }) {
        const {name, value} = target;
        this.setState(
            (prevState) => ({
                ...prevState,
                [name]: value

            })
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        console.table(this.state);
    }


    render() {
        return (
            <>
                <form className="row">
                    <div className="form-group col-12 text-center ">
                        <div>
                            <label htmlFor='name'><input value={this.state.name} onChange={this.handleChange} placeholder="Name" name="name" id="name" type="text"/></label>
                        </div>
                        <div>
                            <label htmlFor='password'><input value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password" id="password"
                                                             type="password"/></label>
                        </div>
                        <a>
                            <button className="btn btn-primary"  onClick={this.handleSubmit}>Sign in</button>
                        </a>
                    </div>
                </form>
            </>
        );
    }

}
