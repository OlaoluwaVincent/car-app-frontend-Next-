import { Socket, io } from 'socket.io-client';

export const socket: Socket = io('http://localhost:9000');
