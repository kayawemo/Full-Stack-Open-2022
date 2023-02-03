import Button from "./Button";

const FormComponent = ({onSubmit,value, onChange, onClick}) => {

    return(
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={value} onChange={onChange} />
            </div>
            <Button onClick={onClick}/>
        </form>
    )
}

export default FormComponent
