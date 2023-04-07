import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta';

import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Project Manager',
  description:
    'Be able to manage projects through different teams organization',
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <SignedIn>
            <Header />
          </SignedIn>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
