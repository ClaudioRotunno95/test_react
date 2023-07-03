const Searchtext = ({data, setBackup}) => {
    const FilteredData = (value) => {
        const Temp = data.filter(e => e.title.includes(value));
        console.log(Temp);
        setBackup(Temp);
    }

    return (
        <div>
                <h3>Search for Title</h3>

                <input icon='search'
                placeholder='Search...'
                onChange={(e) => FilteredData(e.target.value)}
            />
            </div>
    );
  }
  
  export default Searchtext;