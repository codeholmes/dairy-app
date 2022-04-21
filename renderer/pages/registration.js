import NextHead from 'next/head'
import { useRouter } from 'next/router'

export default function Registration() {
	const router = useRouter()

	return (
		<>
			<NextHead>
				<title>New member registration</title>
			</NextHead>
			<section className='h-4/6 w-4/6 grid place-content-center bg-gray-100 rounded-xl shadow-2xl'>
				<section className='w-full h-10 grid grid-cols-3 text-gray-700'>
					<div className='w-5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 cursor-pointer hover:text-bold'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							onClick={() => router.push('index')}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M7 16l-4-4m0 0l4-4m-4 4h18'
							/>
						</svg>
					</div>
					<div className='text-center text-gray-700 text-base font-medium'>
						Registration
					</div>
					<div className='pt-1'>
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
				</section>
				<div className='grid grid-cols-3 gap-4  text-gray-700 text-xs'>
					<p>First name</p>
					<p>Middle name</p>
					<p>Last name</p>
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<input className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'></input>
					<input className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'></input>
					<input className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'></input>
				</div>
				<div className='grid grid-cols-2 gap-4 text-gray-700 text-xs mt-3 mb-1'>
					<p>Age</p>
					<p>Gender</p>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<input className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'></input>
					<select className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'>
						<option>Male</option>
						<option> Female</option>
						<option> Others</option>
					</select>
				</div>
				<div className='text-gray-700 text-xs mt-3 mb-1'>Address</div>
				<input className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'></input>
				<div className='text-gray-700 text-xs mt-3 mb-1'>Phone</div>
				<input className='w-full h-11 pl-3 text-sm border border-gray-400 rounded-md bg-gray-200'></input>
				<button
					className='w-full h-11 rounded-md text-sm font-bold border border-gray-400 bg-blue-500 mt-5 hover:shadow-2xl text-gray-50'
					onClick={() => router.push('/')}>
					Save
				</button>
			</section>
		</>
	)
}
