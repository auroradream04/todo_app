'use server'

import prisma from "./prisma"
import { Task } from "./types"

export async function setTaskComplete(task: Task) {
    await prisma.task.update({
        where: {
            id: task.id
        },
        data: {
            isCompleted: !task.isCompleted
        }
    })
}