'use server'

import prisma from "./prisma";

export async function createTask(task: string) {
    await prisma.task.create({
        data: {
            content: task,
            isCompleted: false
        }
    })
    console.log('submitted')
}