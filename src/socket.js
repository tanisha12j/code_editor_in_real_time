import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    // Fix typo in variable name
    const backend_url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    return io(backend_url, options);
};
