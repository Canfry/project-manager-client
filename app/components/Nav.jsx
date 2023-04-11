// import { usePathname } from 'next/navigation';
// import { Link } from 'next/link';

// export default function Nav() {
//   const pathname = usePathname();
//   return (
//     <ul className='flex items-center gap-4'>
//       <li>
//         {pathname}
//         <Link
//           href='/dashboard'
//           className={`text-xl hover:text-accent-focus ${
//             pathname === '/dashboard' ? 'text-accent-focus' : ''
//           }`}
//         >
//           Dashboard
//         </Link>
//       </li>
//       <li>
//         {pathname}
//         <Link
//           href='/contact'
//           className={`text-xl hover:text-accent-focus ${
//             pathname === '/contact' ? 'text-accent-focus' : ''
//           }`}
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }
