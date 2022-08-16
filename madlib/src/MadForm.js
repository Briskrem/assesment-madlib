import React, {useState, useRef} from 'react'
import './MadForm.css'

export const MadForm = ({buildStory}) => {

    const initialState = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    }

    const [data, setData] = useState(initialState)
    const seconInput = useRef()

    const handleChange = e => {
        e.preventDefault()
        const {name, value}  = e.target
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(data)
        buildStory(data)
        setData(initialState)
    }

    return (
        <React.Fragment>
        <div>HELLO</div>
        <form className='MadForm' onSubmit={handleSubmit}>
            <label htmlFor='noun'>NOUN</label>
            <input autoFocus type='text' name='noun' value={data.noun} onChange={handleChange}/>

            <label htmlFor='noun2'>NOUN2</label>
            <input ref={seconInput} type='text' name='noun2'value={data.noun2} onChange={handleChange}/>

            <label htmlFor='adjective'>ADJECTIVE</label>
            <input type='text' name='adjective' value={data.adjective} onChange={handleChange}/>

            <label htmlFor='color'>COLOR</label>
            <input type='text' name='color'value={data.color} onChange={handleChange}/>
            <br></br>
            <button>CLICK</button>
        </form>
        </React.Fragment>
    );
}