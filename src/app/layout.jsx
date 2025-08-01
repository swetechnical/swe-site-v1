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
      <head>
        {/* Adding Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
        {/* Optionally, add other meta tags or links here */}
      </head>
      <body>
        {children}
        {/* Adding Bootstrap JS Bundle with Popper */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        ></script>
      </body>
    </html>
  );
}
