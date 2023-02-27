function Button() {
	return (
		<div className='container mx-auto'>
			<button className='m-1.5 p-2 text-xl text-green-500 font-bold  border-2 border-b-[5px] border-green-500 rounded-md  hover:cursor-pointer hover:bg-green-500 hover:text-white'>
				Hello World
			</button>
		</div>
	);
}

export default function Home() {
	return (
		<>
			<div className='columns-4'>
				<Button />
				<Button />
				<Button />
				<Button />
			</div>
		</>
	);
}
