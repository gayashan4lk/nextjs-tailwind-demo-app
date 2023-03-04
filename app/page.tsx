import Button from '@/components/button/Button';

export default function Home() {
	return (
		<>
			<div className='columns-2'>
				<Button link='./spacing-sizing' label='Spacing and sizing' />
				<Button link='./typography' label='Typography' />
			</div>
		</>
	);
}
