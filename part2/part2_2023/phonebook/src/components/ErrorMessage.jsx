const ErrorMessage = (x) => {

    //inline styling
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontStyle: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (x.message === null) {
        return null
    }

    return (
        <div style={errorStyle}>
            {x.message}
        </div>
    )
}

export default ErrorMessage
