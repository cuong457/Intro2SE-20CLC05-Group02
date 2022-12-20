
import React from "react";
import $ from 'jquery'

function fadeBottomToRight() {
    console.log("hello");
}

export default class Login extends React.Component {
    state = {
        accounts: [
            {usn: "user1", psw: "user123456"},
            {usn: "admin", psw: "admin123456"},
            {usn: "seller", psw: "seller123456"}
        ],
        login_fail: ""
    }
    redirectRegister = () => {
        window.location.href = "/register"
    }
    login = () => {
        let input_list = {
            usn_input: $('#usn'),
            psw_input: $('#psw')
        }
        let valid = true;
        
        // Check if inputs is empty
        for(const [input_key, input] of Object.entries(input_list)) {
            if(!this.is_validate(input)) {
                this.showValidate(input);
                valid = false;
            }   
        }

        // If inputs is not empty, then check valid login
        if(valid) {
            // If
            let is_exist = false;
            
            for(const account of this.state.accounts) {
                if($(input_list.usn_input).val().trim() == account.usn) {
                    is_exist = true;
                    if($(input_list.psw_input).val().trim() == account.psw) {
                        // Redirect if valid
                        // window.location.href = "/user@" + account.usn;
                        window.location.href = "/user@";
                        break;
                    }
                    else {
                        this.setState({login_fail: "Incorrect Password"});
                        valid = false;
                        break;
                    }
                }
            };
            // If username is not exist
            if(!is_exist) {
                this.setState({login_fail: "Username is not exist"});
                valid = false;
            }
        }
        return valid;
    }
    
    is_validate = (input) => {
        if($(input).val().trim().length == 0)
            return false;
        return true;
    }
    
    showValidate = (input) => {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    
    hideValidate = (input_class) => {
        let input = $(input_class)
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    } 

    render() {
        return (
            <div className="container-login">
                <div className="wrap-login">
                    <span className="login-form-title" onLoad={fadeBottomToRight}>
                        WELCOME TO<br/>SUNRISE CONTINENT
                    </span>
                    <form className="login-form validate-form pb-4 mt-4">
    
                        <div className="wrap-input validate-input" data-validate = "Enter username">
                            <input 
                                className="input-lgin" 
                                type="text" 
                                id="usn" 
                                placeholder="User name"
                                onFocus={() => this.hideValidate('#usn')}
                            />
                            <span className="focus-input" data-placeholder="&#xe82a;"></span>
                        </div>
    
                        <div className="wrap-input validate-input" data-validate="Enter password">
                            <input 
                                className="input-lgin" 
                                type="password" 
                                id="psw" 
                                placeholder="Password"
                                onFocus={() => this.hideValidate("#psw")}
                            />
                            <span className="focus-input" data-placeholder="&#xe80f;"></span>
                        </div>

                        <div className="d-flex justify-content-center pt-3">
                            <p className="text-red me-title" id="login-fail">{this.state.login_fail}</p>
                        </div>
    
                        <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                            <button className="login-form-btn" type="button" onClick={() => this.login()}>
                                LOGIN
                            </button>

                            <p className="ps-3 pe-3">Or</p>
                            
                            <button className="login-form-btn" type="button" onClick={() => this.redirectRegister()}>
                                REGISTER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}