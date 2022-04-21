export default function Layout({ children }) {
	return (
		<main className='h-screen w-full grid place-items-center font-sans text-gray-700 bg-gradient-to-br from-blue-400 via-blue-500'>
			{children}
		</main>
	)
}
