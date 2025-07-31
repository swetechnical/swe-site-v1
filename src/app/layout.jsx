// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';



export const metadata = {
  title: 'SWE - Society of Women Engineers',
  description: 'Empowering women to achieve their full potential in engineering careers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
