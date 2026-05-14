export const metadata = {
  title: 'Nexora Services',
  description: 'Dashboard UI'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
