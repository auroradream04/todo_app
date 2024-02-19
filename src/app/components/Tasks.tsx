'use client'

import { Task } from '@/app/utils/types'

export default function Tasks({ tasks }: { tasks: Task[]}) {
    return (
        <ul className="w-full p-2 border border-black mt-2">
            {tasks.map((task) => (
                <li key={task.id} className="flex justify-between p-2 border-b border-black">
                    <span>{task.content}</span>
                    <span>{task.isCompleted ? "✅" : "❌"}</span>
                </li>
            ))}
        </ul>
    );
}