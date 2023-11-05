import * as React from 'react';

export default function ToggleGroup() {
    const [user, setUser] = React.useState({
        login:"",
        password:"",
        name:""
    });

    const types= ["login", "register"];       
    const [active, setActive] = React.useState(types[0]);

    const onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value})
    }

    const   handleSubmit= (e)=>{
        console.log(user);
        fetch(`http://localhost:8080/${active}`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
        }).then(() => {
            console.log("user sent");
        //   console.log(`user ${active}!`);
        })
    }
    
    return (
        <div>
            {types.map((type) => (
                <button active={active === type} onClick={() => setActive(type)}>
                    {type}
                </button>
            ))}
        <div>
            {active}
        </div>
        
        <div>
            <form>

                <div>
                    <input type="login" id="loginName" name= "login" onChange={onChangeHandler}/>
                    <label  >Username</label>
                </div>

                <div>
                    <input type="password" id="loginPassword" name="password" onChange={onChangeHandler}/>
                    <label >Password</label>
                </div>

                {active === "register" && <div>
                    <input type="name"  name="name" onChange={onChangeHandler}/>
                    <label >name</label>
                </div>}

                <button type="button" onClick={handleSubmit}>{active}</button>

            </form>
            <div>{user.login}</div>
            <div>{user.password}</div> 

        </div>

      </div>

     
    );
  }