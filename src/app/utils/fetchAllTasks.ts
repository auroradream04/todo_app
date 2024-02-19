import prisma from "./prisma"

export async function fetchAllTasks() {
    const tasks = prisma.task.findMany() 
    return tasks
}