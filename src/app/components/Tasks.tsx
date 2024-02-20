'use client'

import { Task } from '@/app/utils/types'
import { removeTask } from '../utils/removeTask';
import { useRouter } from 'next/navigation';

export default function Tasks({ tasks }: { tasks: Task[]}) {
    const router = useRouter()
    async function handleRemove(taskId: string) {
        await removeTask(taskId)
        router.refresh()
    }

    return (
        <ul className="w-full p-2 border border-black mt-2">
            {tasks.map((task) => (
                <li key={task.id} className="flex justify-between p-2 border-b border-black">
                    <span>{task.content}</span>
                    <span onClick={() => handleRemove(task.id)} className='cursor-pointer'>❌</span>
                </li>
            ))}
        </ul>
    );
}