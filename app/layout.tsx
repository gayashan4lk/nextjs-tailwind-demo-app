import './globals.css'
import ReactQueryWrapper from './ReactQueryWrapper'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryWrapper>
          <div className="this-is-root-layout">{children}</div>
        </ReactQueryWrapper>
      </body>
    </html>
  )
}
