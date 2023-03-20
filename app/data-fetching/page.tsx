import Button from '@/components/button/Button'
import Link from 'next/link'

export default async function DataFetchingPage() {
  return (
    <div>
      <h1 className="text-xl">Data fetching page</h1>
      <Link href="/data-fetching/1">Page 1</Link>
      <Button link="/" label="Home" />
    </div>
  )
}
