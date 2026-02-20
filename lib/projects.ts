export interface Project {
  name: string
  desc: string
  tech: string[]
  image: string
  link: string
  external: boolean
}

export const projects: Project[] = [
  { name: 'AI Image Generation', desc: "The future is here. Testing the possibilities of AI image generation with Dall-E and stable diffusion.", tech: ['Dall-E', 'stable diffusion', 'AI'], image: 'ai.webp', link: '/projects/ai', external: false },
  { name: 'Moonshire NFT platform', desc: 'Moonshire is a web3 platform, a decentralised service for content creators running on the Blockchain.', tech: ['Solidity', 'ether.js', 'hardhat', 'NFTs'], image: 'moonshire.webp', link: 'https://moonshire.vercel.app/', external: true },
  { name: "Annapurna Trek Map", desc: "Website built with Mapbox, trying to display some impressions from the longest trek I've done so far.", tech: ['Mapbox', 'Geolocation', 'Clustering'], image: 'annapurna.webp', link: 'https://annapurna-trek-map.vercel.app/', external: true },
  { name: 'ThreeJS Game', desc: 'Stack game with Three.js and Cannon.js. Venturing into WebGL and game physics.', tech: ['ThreeJS', 'WebGL', 'Game Physics'], image: 'threejs.webp', link: '/projects/threejs', external: false },
  { name: 'JavaScript Playground', desc: 'A playground for algorithmic fun with JavaScript. And a tool for sharing code solutions for interviews.', tech: ['Algorithms', 'React', 'Code interviews'], image: 'playground.webp', link: '/playground', external: false },
  { name: 'CZMStem Clinic', desc: 'App for a stem cell clinic with user management, payments and health data visualisation.', tech: ['Plaid API', 'ThreeJS', 'NextJS'], image: 'czmstem.webp', link: 'https://www.czmstem.com/', external: true },
  { name: 'Cozumon', desc: 'A taxonomy app for the island of Cozumel in Mexico to raise awareness for endangered endemic species.', tech: ['useSWR', 'iNaturalist API', 'Filtering'], image: 'cozumon.webp', link: 'https://cozumon.vercel.app/', external: true },
  { name: 'Crypto Dashboard', desc: 'A dApp using the Coinbase API to retrieve data using their Websocket API for realtime price data.', tech: ['Websockets', 'CoinbaseAPI', 'chart.js'], image: 'dashboard.webp', link: 'https://app.christof.digital/dashboard', external: true },
  { name: 'Video Recording', desc: 'Building my own video recording app using MediaCapture and the Streams API.', tech: ['MediaCapture', 'HTML5', 'Streams API'], image: 'recording.webp', link: '/projects/recording', external: false },
  { name: 'RateMe', desc: 'A fresh approach to customer care. App for restaurants to rate customers for more transparency.', tech: ['framer-motion', 'Mapbox', 'Microservices'], image: 'rateme.webp', link: 'https://rate-me-cozumel.vercel.app/', external: true },
  { name: 'Rick&Morty API', desc: 'Using react-query and the open Rick&Morty API to test clearer data flow without useEffect().', tech: ['react-query', 'Pagination', 'Search'], image: 'rick.webp', link: '/projects/api', external: false },
  { name: "Dog's Paradise App", desc: "Web app for a dogs daycare Spa with admin dashboard, user management and social elements.", tech: ['Supabase', 'SPA', 'Multilingual'], image: 'dogs.webp', link: 'https://dogs-paradise.vercel.app/', external: true },
  { name: 'Headless E-Commerce', desc: 'Trying out Next.js Commerce as modern headless shop solution hosted on Vercel.', tech: ['E-Commerce', 'SEO', 'JAM Stack'], image: 'commerce.webp', link: 'https://smoke-shop.vercel.app/', external: true },
  { name: 'Sucré Salé Bakery', desc: 'Just a simple yet beautiful and performant website, built as PWA and seeing quite some traffic.', tech: ['i18n', 'QR Codes', 'Admin Dashboard'], image: 'sucre.webp', link: 'https://sucre-sale.vercel.app/', external: true },
]
