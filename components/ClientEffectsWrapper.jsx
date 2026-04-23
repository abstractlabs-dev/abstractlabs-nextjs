'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import CursorGlow from '@/components/CursorGlow/CursorGlow';

/**
 * Handles all client-side logic (Loading, Cursor, Page Entrance)
 * but keeps the children (the actual site content) as searchable Server Components.
 */
export default function ClientEffectsWrapper({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CursorGlow />
      <LoadingScreen onDone={() => setLoaded(true)} />
      
      {/* 
        We render children but hide them visually with CSS until loaded.
        This is a trick for "Perfect SEO": 
        Google sees the HTML immediately, but the user sees the Loading Screen first.
      */}
      <div 
        className={loaded ? "page-enter" : "visually-hidden"}
        style={{ visibility: loaded ? 'visible' : 'hidden' }}
      >
        {children}
      </div>

      <style jsx global>{`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </>
  );
}
