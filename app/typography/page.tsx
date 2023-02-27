const TypographyPage = () => {
	return (
		<>
			<h1 className='font-serif text-6xl antialiased font-bold underline decoration-red-500 decoration-wavy'>
				Title 1
			</h1>

			<div className='text-4xl font-mono'>
				<h1 className='font-semibold'>Title 2</h1>
				<h1 className='font-bold slashed-zero'>0</h1>
			</div>
			<p className='slashed-zero font-sans text-6xl font-bold '>0</p>

			<p>A regular paragraph</p>
			<p>A description paragraph</p>
			<p className='note'>A little note</p>
		</>
	);
};

export default TypographyPage;
