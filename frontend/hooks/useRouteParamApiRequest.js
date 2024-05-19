import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function useRouteParamApiRequest(param, httpFunction) {
    const params = useParams()
    const pathParam = params[param]
    const [data, setData] = useState()

    useEffect(() => {
        async function sendRequest() {
            try {
                const response = await httpFunction(pathParam)
                setData(response.data)
            } catch (error) {
                alert(error)
            }
        }

        sendRequest()
    }, [pathParam])

    return { data }
}

