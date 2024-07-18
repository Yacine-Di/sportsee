import { useState, useEffect } from 'react'

export function useFetch(fn) {
    const id = 12
    const [data, setData] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fn(id)
                setData(data)
            } catch (err) {
                setError(true)
            }
        }

        fetchData()
    }, [fn])

    return { data, error }
}
