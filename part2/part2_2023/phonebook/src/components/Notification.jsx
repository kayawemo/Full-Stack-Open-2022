const Notification = (x) => {

    //inline styling
    const notificationStyle = {
        color: 'green',
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
        <div style={notificationStyle}>
            {x.message}
        </div>
    )
}

export default Notification
