import './globals.css'

export const metadata = {
  title: 'Pet Dropshipping Store',
  description: 'Starter store built with Next.js and Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
