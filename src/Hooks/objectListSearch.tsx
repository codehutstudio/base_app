import { useState, useEffect } from 'react'

export const useObjectListSearch = (data: {[key:string]:any}, searchKey:string) => {
    const [filteredList, setFilteredValues] = useState(data)
    const [searchValue, setSearchValue] = useState("")
    const onChange = ({target: {value}}: any) => {
        setSearchValue(value)
    }
    const clear = () => setSearchValue('');

    useEffect(() => {
        if (data && searchValue !== "") {
            setFilteredValues(data.filter((a: {[key:string]:any}) => a[searchKey].startsWith(searchValue)))
        } else {
            setFilteredValues(data)
        }
    }, [data, searchValue])
    return { filteredList, onChange, searchValue, setSearchValue, clear }
}