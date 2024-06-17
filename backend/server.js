import express from 'express';
import path from 'path';
import { app, server } from './socket/socket.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectDB from './Utils/connect.js';
import { PORT } from './Utils/env.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
// app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
   connectDB();
   console.log('Server is running on port ' + PORT);
});