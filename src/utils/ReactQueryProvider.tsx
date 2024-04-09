'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import AuthProvider from './SessionProvider';
import { socket } from '@/lib/socket';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  socket.on('connect', () => {
    console.log('socketID =>', socket.id);
    socket.emit('ping', { client: socket.id, data: 'Any data' });
    socket.on('notification', (res) => {
      console.log('notification =>', res);
    });
    socket.on('listener', (data: any) => {
      console.log('listener =>', data);
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
