import './globals.css'
import NavBar from './components/NavBar'

export const metadata = {
  title: 'Dictionary Web App',
  description: 'Generated by create next app',
  icons: {
    icon: './assets/images/favicon-32x32.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
