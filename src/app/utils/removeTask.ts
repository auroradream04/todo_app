'use server'

import prisma from "./prisma"

export async function removeTask(taskId: string) {
    await prisma.task.delete({
        where: {
            id: taskId
        }
    })
}