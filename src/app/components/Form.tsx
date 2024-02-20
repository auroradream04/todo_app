'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createTask } from "../utils/createTask"

export default function Form() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(e: any) {
        e.preventDefault()
        setIsLoading(true)
        await createTask(e.target[0].value)
        setIsLoading(false)
        router.refresh() // Refresh the page to see the new task
    }

    return (
        <form className="w-full flex border border-[rgb(20,20,20)]" onSubmit={handleSubmit}>
            <input type="text" className="w-full border border-[rgb(20,20,20)] p-2 m-2 h-10 rounded-full" />
            <button type="submit" disabled={isLoading}>Add</button>
        </form>
    )
} 