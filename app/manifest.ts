import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tirth Jain - Full Stack Developer & Software Engineer',
    short_name: 'TirthJ.dev',
    description: 'Professional full-stack developer with 6+ years experience. Specializing in React, Next.js, Node.js, PHP, and modern web technologies. Available for international projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}