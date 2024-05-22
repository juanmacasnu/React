import { Age } from "./Age"
export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}!</strong></p>
            <p>Primero</p>
            <Age age={age}/>
            
            <p>Segundo</p>
            {age > 18 && <Age age={age}/>}
            
            <p>Tercero</p>
            {age && <Age age={age}/>}
            
            <p>Cuarto</p>
            {18 < age && age < 65 && <Age age={age}/>}

            <p>Quinto</p>
            {18 < age && age < 65 && name==="John" && <Age age={age}/>}
        </div>
    )
}