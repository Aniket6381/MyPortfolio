// 'use client';

// import { useEffect } from 'react';
// import { useRouter, usePathname } from 'next/navigation';

// export default function ScrollHandler() {
//     const router = useRouter();
//     const pathname = usePathname();

//     useEffect(() => {
//         const hash = window.location.hash;
//         if (hash) {
//             const id = hash.replace('#', '');
//             const el = document.getElementById(id);
//             if (el) {
//                 el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 // clean the URL after scrolling
//                 window.history.replaceState(null, '', pathname);
//             }
//         }
//     }, [pathname]);

//     return null;
// }

