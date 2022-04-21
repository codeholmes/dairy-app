import { useRouter } from 'next/router'
import NextHead from 'next/head'
import Button from '@/components/Button'

export default function Home() {
	const router = useRouter()

	return (
		<>
			<NextHead>
				<title>Home</title>
			</NextHead>
			<div className='h-80 w-96 pt-3 pb-12 grid grid-rows-5 place-items-center bg-gray-200 rounded-xl shadow-2xl'>
				<div>
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
				<Button text='New Record' link='/newRecord' />
				<Button text='Payments' link='/payment' />
				<Button text='Registration' link='/registration' />
				<Button text='Reports' link='/' />
			</div>
		</>
	)
}
