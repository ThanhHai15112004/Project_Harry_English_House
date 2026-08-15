import React from 'react';
import { Toaster } from 'sonner';
import { useLenis } from '@/core';
import { HomePage } from '@/pages';
import '@/styles/index.css';

export const App = () => {
  // Initialize smooth scrolling automatically
  useLenis();

  return (
    <>
      <Toaster richColors position="top-right" closeButton />
      <HomePage />
    </>
  );
};

export default App;
