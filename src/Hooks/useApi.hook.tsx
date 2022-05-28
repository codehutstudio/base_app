import { useState } from "react"

export const useApi = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    return {loading, setLoading, error, setError, data, setData}
}