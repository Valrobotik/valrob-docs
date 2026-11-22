import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const sdlUrl = useBaseUrl('/sdl');

  return (
    <Head>
      <meta httpEquiv="refresh" content={`0; url=${sdlUrl}`} />
      <meta
        name="description"
        content="La documentation des ateliers d'initiation à la robotique et du concours suiveur de ligne de Valrobotik."
      />
      <meta
        property="og:description"
        content="La documentation des ateliers d'initiation à la robotique et du concours suiveur de ligne de Valrobotik."
      />
    </Head>
  );
}
