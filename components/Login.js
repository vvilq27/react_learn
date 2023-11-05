import * as React from 'react';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: "Cash",
            types: ["Cash", "Credit Card", "Bitcoin"],
            login:"",
            password:"",
            onLogin: props.onLogin,
            onRegister: props.onRegister
        }
    }
    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    };

    onSubmitLogin = (e) => {
        this.state.onLogin(e, this.state.login, this.state.password);
    };
 
    onSubmitRegister = (e) => {
        this.state.onRegister(
            e,
            this.state.login,
            this.state.password
        );
    };

    render(){
        // const typess= ["Cash", "Credit Card", "Bitcoin"];
        
        function ToggleGroup() {
            
            const [activee, setActive] = React.useState(this.state.types[0]);
            
            return (
              <div>
                {this.state.types.map((type) => (
                  <button active={activee === type} onClick={() => setActive(type)}>
                    {type}
                  </button>
                ))}
              <div>
                {activee}
              </div>
              </div>
             
            );
          }

        return(
            <div>
                <div>
                    <ul>
                        <li>
                        <button>Login</button>
                        </li>
                    </ul>

                    <div>
                        <form>
                            <div>
                                <input type="login" name="login" />
                                <label>username</label>
                            </div>
                            <div>
                                <input type="password" name="password" />
                                <label>password</label>
                            </div>
                            <button>Sign in</button>
                            <ToggleGroup/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}