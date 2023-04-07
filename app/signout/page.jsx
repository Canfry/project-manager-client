import { SignedOut } from '@clerk/nextjs/app-beta';

export default function SignInpage() {
  return <SignedOut path='/signout' redirectUrl='/signin' />;
}
