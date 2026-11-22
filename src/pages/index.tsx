import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const sdlUrl = useBaseUrl('/sdl');

  return (
    <Head>
      <meta httpEquiv="refresh" content={`0; url=${sdlUrl}`} />
    </Head>
  );
}
