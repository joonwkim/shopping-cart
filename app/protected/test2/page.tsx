'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import AccessDenied from "@/app/components/access-denied"

const TestPage2 = () => {
    const { data: session } = useSession()
    const [content, setContent] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/examples/protected")
            const json = await res.json()
            if (json.content) {
                setContent(json.content)
            }
        }
        fetchData()
    }, [session])

    if (!session) {
        return (
            <AccessDenied />
        )
    }
    return (
        <div><h1>Protected Page2</h1>
            <p>
                <strong>{content ?? "\u00a0"}</strong>
            </p></div>
    )
}

export default TestPage2