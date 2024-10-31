import useInputState from "../../Hooks/useInputState";


const HookForms = () => {
    // const [name, handleNameChange] = useInputState('shuvo');
    const emailState = useInputState('shuvo@mail.go')

    const handleSubmit = e =>{
        console.log('form data', emailState.value)
        e.preventDefault()
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input 
                value={name} onChange={handleNameChange}
                type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForms;