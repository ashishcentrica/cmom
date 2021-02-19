import { useState } from 'react'
import { useForm } from './useForm'

export const LoginForm = () => {
    
    const [values, handleChange] = useForm({email: "", password: ''});
    const [lastName, setLastName] = useState("")
    
    return (
        <div>
            <input type="text" name={lastName} id="" onChange={(event) => {setLastName(event.target.value)}}/>
            <input type="email" value={values.email} name="email" id="email" onChange={handleChange} />
            <input type="password" value={values.password} name="password" id="password" onChange={handleChange} />
        </div>
    )
    
}
