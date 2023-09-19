const Filter = (props) => {
    return (
        <div>
        filter shown with
        <input value={props.searchName} onChange={props.onChange}/>
      </div>
    )
}

export default Filter