import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<div className='columns-4'>
				<div className='w-full container mx-auto'>
					<button className='m-1.5 p-2 text-2xl text-green-500 font-bold  border-2 border-b-[5px] border-green-500 rounded-md  hover:cursor-pointer hover:bg-green-500 hover:text-white'>
						Hello World
					</button>
				</div>
				<div className='w-full container mx-auto'>
					<button className='m-1.5 p-2 text-2xl text-green-500 font-bold  border-2 border-b-[5px] border-green-500 rounded-md  hover:cursor-pointer hover:bg-green-500 hover:text-white'>
						Hello World
					</button>
				</div>
				<div className='w-full container mx-auto'>
					<button className='m-1.5 p-2 text-2xl text-green-500 font-bold  border-2 border-b-[5px] border-green-500 rounded-md  hover:cursor-pointer hover:bg-green-500 hover:text-white'>
						Hello World
					</button>
				</div>
				<div className='w-full container mx-auto'>
					<button className='m-1.5 p-2 text-2xl text-green-500 font-bold  border-2 border-b-[5px] border-green-500 rounded-md  hover:cursor-pointer hover:bg-green-500 hover:text-white'>
						Hello World
					</button>
				</div>
			</div>
		</>
	);
}
