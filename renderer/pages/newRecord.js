import NextHead from 'next/head'
import { useRouter } from 'next/router'
import CurrDate from '@/components/CurrDate'

export default function NewRecord() {
	const router = useRouter()

	return (
		<>
			<NextHead>
				<title>Create new record</title>
			</NextHead>
			<section className='w-96 h-80 grid place-content-center bg-gray-100 rounded-xl shadow-2xl'>
				<section className='w-72 h-70 rounded-md content-center'>
					<section className='w-full h-10 pb-12 grid grid-cols-3 text-gray-700'>
						<div className='w-5'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 cursor-pointer hover:text-bold'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								onClick={() => router.push('/index')}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M7 16l-4-4m0 0l4-4m-4 4h18'
								/>
							</svg>
						</div>
						<div className='text-center text-base font-medium'>
							Select Slot
						</div>
						<div></div>
					</section>
					<div className='text-gray-700 text-xs'>Date</div>
					<CurrDate />
					<div className='text-gray-700 text-xs mt-3 mb-1'>
						Slot
						<span className='text-red-400'>*</span>
					</div>
					<select className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'>
						<option>Morning</option>
						<option>Evening</option>
					</select>
					<button
						className='w-full h-11 rounded-md text-sm font-bold border border-gray-400 bg-blue-500 mt-5 hover:shadow-2xl text-gray-50'
						onClick={() => router.push('newRecord.in')}>
						Next
					</button>
				</section>
			</section>
		</>
	)
}
