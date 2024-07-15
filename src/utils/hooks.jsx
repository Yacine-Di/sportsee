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
                console.log(err)
                setError(true)
            }
        }

        fetchData()
    }, [])

    if (error) {
        return <span>Il y a un problème</span>
    }
    return { data, error }
}
