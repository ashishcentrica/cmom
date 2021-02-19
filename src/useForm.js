import { useState } from 'react'

export const useForm = (initialValue) => {
    const [input, setInput] = useState(initialValue);
    return [input, e => setInput({
        ...input,
        [e.target.name]: e.target.value
    })]
}
