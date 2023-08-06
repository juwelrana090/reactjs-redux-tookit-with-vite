import React from 'react'

const UserList = () => {
    return (
        <div className='w-full'>

            <>
                <h2 className="mb-2 text-2xl  font-semibold text-gray-900 dark:text-white">
                    User List:
                </h2>
                <ul className="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="w-full flex justify-between items-center">
                        <div className='w-full'>
                            <svg
                                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className='text-lg text-black'>At least 10 characters</span>
                        </div>
                        <div className='w-full'>
                            <span className='text-lg rounded-lg bg-red-500  text-white p-1'>Del</span>
                        </div>
                    </li>
                </ul>
            </>

        </div>
    )
}

export default UserList