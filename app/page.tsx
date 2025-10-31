'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Inject widget script into parent page if embedded
    const script = document.createElement('script');
    script.src = '/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return <main></main>;
}