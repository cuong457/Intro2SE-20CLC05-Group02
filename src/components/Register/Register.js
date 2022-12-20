
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
        register_fail: ""
    }
    redirectLogin = () => {
        window.location.href = "/login"
    }
    register = () => {
        let input_list = {
            usn_input: $('#usn'),
            psw_input: $('#psw'),
            cmtpsw_input: $('#cmtpsw')
        }
        let valid = true;
        
        // Check if inputs is empty
        for(const [input_key, input] of Object.entries(input_list)) {
            if(!this.is_validate(input)) {
                this.showValidate(input);
                valid = false;
            }   
        }

        // Check if password does not match
        if(valid) {
            if($(input_list.psw_input).val().trim() != $(input_list.cmtpsw_input).val().trim()) {
                this.setState({register_fail: "Commit password does not match"});
                valid = false;
            }
            else {
                let is_exist = false;
            
                for(const account of this.state.accounts) {
                    if($(input_list.usn_input).val().trim() == account.usn) {
                        this.setState({register_fail: "This username is exist"});
                        valid = false;
                        break;
                    }
                }
            }
        }

        // If all requirements is meet, then upload account to database and show noti
        if(valid) {
            window.location.href = "#success";
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
            <React.Fragment>
                <div className="container-login">
                    <div className="wrap-login">
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
        
                            <div className="wrap-input validate-input" data-validate="Enter commit password">
                                <input 
                                    className="input-lgin" 
                                    type="password" 
                                    id="cmtpsw" 
                                    placeholder="Commit password"
                                    onFocus={() => this.hideValidate("#cmtpsw")}
                                />
                                <span className="focus-input" data-placeholder="&#xe80f;"></span>
                            </div>

                            <div className="d-flex justify-content-center pt-3">
                                <p className="text-red me-title" id="login-fail">{this.state.register_fail}</p>
                            </div>
        
                            <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                                <button className="login-form-btn" type="button" onClick={() => this.register()}>
                                    REGISTER
                                </button>
                                
                                <p className="ps-3 pe-3">Or</p>

                                <button className="login-form-btn" type="button" onClick={() => this.redirectLogin()}>
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="success" className="overlay">
                    <div className="popup">
                        <div className="content">
                            <p className="xlg-title text-center pb-4">Register successfully!</p>
                            <p className="lg-title wrap-text text-justify">Welcome you to Sunrise Continent. We hope that you will have a wonderful experience with us.</p>
                            <div className="text-center pt-4">
                                <a href="/login"><button className="btn btn-primary"><span className="me-title">GO TO LOGIN</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}