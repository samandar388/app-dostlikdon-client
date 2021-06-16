import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login} from "../redux/actions/loginAction";

const Login = (props) => {
    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={(event, errors, values)=> {props.login(event, errors, values, props.history)}}>
                                <AvField type="text" name="phoneNumber" label="your phone number"
                                         required errorMessage="toldiriw majburiy"/>

                                <AvField type="password" name="password" label="your password"
                                         required errorMessage="toldiriw majburiy"/>
                                <button type="submit" className="btn btn-success btn-block">Login</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default connect(null,{login})(Login);