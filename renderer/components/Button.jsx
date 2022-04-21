import { useRouter } from 'next/router'

export default function Button({ text, link }) {
	const router = useRouter()
	return (
		<button
			className={`h-12 w-72 grid place-items-center text-xs font-bold bg-gray-300 hover:bg-blue-400 hover:text-gray-100  border border-gray-400 rounded-md transition-all duration-200`}
			onClick={() => router.push(link)}>
			{text}
		</button>
	)
}
