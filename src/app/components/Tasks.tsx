'use client'

import { Task } from '@/app/utils/types'
import { removeTask } from '../utils/removeTask';
import { useRouter } from 'next/navigation';
import { FaXmark } from 'react-icons/fa6';
import { setTaskComplete } from '@/app/utils/setTaskComplete'

export default function Tasks({ tasks }: { tasks: Task[] }) {
    const router = useRouter()

    async function handleRemove(taskId: string) {
        await removeTask(taskId)
        router.refresh()
    }

    let isNotEmpty = tasks.length > 0 ? true : false

    async function handleCheck(task: Task) {
        await setTaskComplete(task)
        router.refresh()
    }


    return (
        <>
            {isNotEmpty ? <ul className="w-full py-2 border border-black mt-2">
                {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between py-2 border-b border-black text-sm">
                        <div className='flex items-center'>
                            <input type="checkbox" className='mr-2 h-5 w-5 accent-[rgb(76,160,255)]' checked={task.isCompleted ? true : false} onChange={() => handleCheck(task)} />
                            <span className={`${task.isCompleted && 'line-through'}`}>{task.content}</span>
                        </div>
                        <span onClick={() => handleRemove(task.id)} className='cursor-pointer'><FaXmark /></span>
                    </li>
                ))}
            </ul> : ''}
        </>
    )
}