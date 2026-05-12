import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ATC Rénovation',
    short_name: 'ATC Rénovation',
    description: 'Votre spécialiste en rénovation intérieure à Nancy',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#156040',
    icons: [
      {
        src: '/favicons/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicons/favicon-256.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
  };
}
