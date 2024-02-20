'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createTask } from "../utils/createTask"

export default function Form() {
    const [isLoading, setIsLoading] = useState(false)
    const [textInput, setTextInput] = useState('')
    const router = useRouter()

    function handleChange(e: any) {
        setTextInput(e.target.value)
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        if (textInput === '') return
        setIsLoading(true)
        await createTask(e.target[0].value)
        setIsLoading(false)
        setTextInput('')
        router.refresh() // Refresh the page to see the new task
    }

    return (
        <form className="w-full flex border border-[rgb(20,20,20)]" onSubmit={handleSubmit}>
            <input type="text" value={textInput} onChange={handleChange} className="w-full border border-[rgb(20,20,20)] p-2 m-2 h-10 rounded-full" />
            <button type="submit" disabled={isLoading} className="cursor-pointer mr-2">add</button>
        </form>
    )
} 