import Button from "./Button";

const PersonsForm = ({ onSubmit,nameValue, onNameChange, numberValue, onNumberChange, onClick}) => {

    return(
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={nameValue} onChange={onNameChange} />
            </div>
            <div>
                number: <input value={numberValue} onChange={onNumberChange} />
            </div>
            <Button onClick={onClick}/>
        </form>
    )
}

export default PersonsForm
