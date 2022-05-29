import React, { useEffect, useState } from 'react'

export default function useObjectListFilter({list, key}: {list: any[], key: string}) {
    const [filter, setFilter] = useState('')
    const [filteredList, setFilteredList] = useState([] as any[])
    const clear = () => setFilter('')
    useEffect(() => {
        if (filter === '') {
            setFilteredList([...list])
        } else {
            setFilteredList(list.filter(({[key]: itemKey}) => itemKey.startsWith(filter)))
        }
    }, [filter])
    return {
        filteredList,
        setFilter,
        filter, 
        clear
    }
}
