'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createTask } from "../utils/createTask"
import { FaPlus } from "react-icons/fa"

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
        <form className="w-full flex justify-between items-center mt-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="add a task..." value={textInput} onChange={handleChange} className="w-full bg-[rgb(40,40,40)] p-2 mr-4 h-8 rounded-md outline-none text-sm" />
            <button type="submit" disabled={isLoading} className="cursor-pointer"><FaPlus/></button>
        </form>
    )
} 