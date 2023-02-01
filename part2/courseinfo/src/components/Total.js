const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <h2>total of {total} exercises</h2>
    )
}

export default Total
