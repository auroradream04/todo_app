'use client'

import { useState } from "react"
import prisma from "@/app/utils/prisma"

export default function Form() {

    function handleSubmit(e: any) {
        e.preventDefault()
        prisma.task.create({
            data: {
                content: e.target[0].value,
                isCompleted: false
            }
        
        })
        console.log('submitted')
    }

    return (
        <form className="w-full flex border border-[rgb(20,20,20)]" onSubmit={handleSubmit}>
            <input type="text" className="w-full border border-[rgb(20,20,20)] p-2 m-2 h-10 rounded-full" />
            <button type="submit">Add</button>
        </form>
    )
} 