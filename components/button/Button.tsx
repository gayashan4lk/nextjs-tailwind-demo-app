import Link from 'next/link'

type Props = {
  link: string
  label: string
}

export function Button({ link, label }: Props) {
  return (
    <div className="container mx-auto">
      <button className="m-1.5 p-2 text-xl text-green-500 font-bold  border-2 border-b-[5px] border-green-500 rounded-md  hover:cursor-pointer hover:bg-green-500 hover:text-white">
        <Link href={link}>{label}</Link>
      </button>
    </div>
  )
}

export default Button
