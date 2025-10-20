import { useEffect, useState } from 'react'
import './index.css'
import { FloatingDockDemo } from './shared/navbar'

export default function App() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('theme') === 'dark'
	)

	// Faqat birinchi marta ochilganda dark class qo‘shish
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, []) // <--- Bu sahifa yuklanganda faqat bir marta ishga tushadi

	// darkMode o‘zgarganda yangilash
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [darkMode])

	return (
		<div className='flex  items-center justify-center h-screen bg-white dark:bg-gray-900 transition-colors duration-500'>
			<FloatingDockDemo />
			<button
				onClick={() => setDarkMode(!darkMode)}
				className='px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-all duration-300 shadow-md'
			>
				{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
			</button>
			<h1 className='bg-red-500'>ndfsbfjsdbfjsbfjh</h1>
		</div>
	)
}
