//components/CountUpClient.tsx
'use client';

import dynamic from 'next/dynamic';
import type { CountUpProps } from 'react-countup';

// Importa dinamicamente com SSR desativado
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function CountUpClient(props: CountUpProps) {
  // Apenas renderiza o componente importado
  return <CountUp {...props} />;
}
