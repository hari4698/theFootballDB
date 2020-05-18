import { InputGroup, FormControl } from "react-bootstrap";


function Search() {

    return (
        <InputGroup>
            <FormControl
                placeholder="Search"
            />
            <InputGroup.Append>
                <InputGroup.Text>Search</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default Search;