import { useRouter } from 'next/router'

export default function FormCard({ text, children }) {
	const router = useRouter()

	return (
		<div className='flex flex-col h-4/6 rounded-md'>
			<div className='flex flex-row justify-between'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6 cursor-pointer hover:text-bold'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					onClick={() => router.push('/newrecord')}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M7 16l-4-4m0 0l4-4m-4 4h18'
					/>
				</svg>
				<h4>{text}</h4>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 float-right cursor-pointer'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					onClick={() => router.push('index')}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
					/>
				</svg>
			</div>
			<div>{children}</div>
		</div>
	)
}
