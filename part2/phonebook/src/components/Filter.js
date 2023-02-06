const Filter = ({onChange, value}) => {

    return (
        <div>
            <form>
                filter shown with<input type="search" onChange={onChange} value={value}/>
            </form>

        </div>
    )
}
export default Filter;
