import prisma from "./prisma"

export async function fetchAllTasks() {
    const tasks = prisma.task.findMany({
        orderBy: {
            createdAt: 'asc'
        }
    }) 
    return tasks
}