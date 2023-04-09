import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta';
import { dark } from '@clerk/themes';

import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Project Manager',
  description:
    'Be able to manage projects through different teams organization',
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang='en'>
        <body className='h-screen flex flex-col'>
          <SignedIn>
            <Header />
          </SignedIn>
          <main className='grow'>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
