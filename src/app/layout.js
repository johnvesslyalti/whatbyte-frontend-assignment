import './globals.css';

export default function RootLayout({ children }) {
  return(
    <html lang='en'>
      <head>
        <title>What Bytes</title>
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}