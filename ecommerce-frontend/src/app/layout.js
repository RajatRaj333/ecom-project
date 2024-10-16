
import './globals.css';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>E-commerce Store</title>
      </head>
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
