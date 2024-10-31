import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')


    const handleSubmit = e =>{
      e.preventDefault();
      if(password.length < 6){
        setError("Password must be 6 characters or longer")
      }
      else{
        setError(" ")
        console.log(email, password, name)
      }
     
      
    }
    const handleNameChange = e =>{
        e.preventDefault();
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        e.preventDefault()
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                onChange={handleNameChange}

                type="text" name="name" />
                <br />

                <input
                onChange={handleEmailChange}
                
                type="email" name="email" />
                <br />

                <input

                onChange={handlePasswordChange}
                
                type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateFullForm;