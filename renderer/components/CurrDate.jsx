export default function CurrDate() {
	let today = new Date()
	let DD = today.getDate()
	let MM = today.getMonth() + 1
	let YYYY = today.getFullYear()
	let date_ = DD + '/' + MM + '/' + YYYY

	return (
		<select className='w-full h-11 border border-gray-400 rounded-md mt-1 bg-gray-200 text-sm pl-3'>
			<option>{date_}</option>
		</select>
	)
}
