import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select name="Brand" ref={register({ required: true })}>
                <option value="BMW">BMW</option>
                <option value="Volkswagen">Volkswagen</option>
            </select>
            <select name="Model" ref={register({ required: true })}>
                <option value="X3">X3</option>
                <option value="X5">X5</option>
            </select>
            <select name="Fuel Type" ref={register}>
                <option value="BMW">BMW</option>
                <option value="Volkswagen">Volkswagen</option>
            </select>
            <select name="Transmition" ref={register}>
                <option value="BMW">BMW</option>
                <option value="Volkswagen">Volkswagen</option>
            </select>
            <select name="Price" ref={register}>
                <option value="BMW">BMW</option>
                <option value="Volkswagen">Volkswagen</option>
            </select>
            <select name="Year" ref={register}>
                <option value="BMW">BMW</option>
                <option value="Volkswagen">Volkswagen</option>
            </select>

            <input name="Condition" type="radio" value="BMW" ref={register} />
            <input
                name="Condition"
                type="radio"
                value="Volkswagen"
                ref={register}
            />

            <input type="submit" />
        </form>
    );
}
