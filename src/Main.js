import React from 'react';


export default class Main extends React.Component {

    render () {
        return(
            <>
                <form className="row">
                    <div className="form-group col-12 col-sm-4">
                        <label htmlFor='name'><input placeholder="Name" name="name" id="name" type="text"/></label>
                    </div>
                    <div className="form-group col-12 col-sm-4">
                        <label htmlFor='password'><input placeholder="Password" name="password" id="password" type="password"/></label>
                    </div>
                    <div className="form-group col-12 col-sm-4">
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </>
        );
    }

}
