import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Project Manager',
  description:
    'Be able to manage projects through different teams organization',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
