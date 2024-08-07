import express from 'express';
import cors from "cors";
import "dotenv/config";
import UserRoutes from "./users/routes.js";
import mongoose from 'mongoose';
import session from "express-session";
import LoginRoutes from './Login/routes.js';
import SignupRoutes from './Signup/routes.js';
import PictureRoutes from './pictures/routes.js';
import MessageRoutes from './messages/routes.js';
import AudioCallingRoutes from './calling/audiocalling/routes.js';
import VideoCallingRoutes from './calling/videocalling/routes.js';
import {createServer} from 'http';

mongoose.connect(process.env.MONGO_LINK);

const app = express()
const httpServer = createServer(app)
app.use(
    cors({
    credentials: true,
    // origin: "http://localhost:3000",
    // origin: process.env.FRONTEND_URL,
    origin: true,
  })
 );

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
app.use(session(sessionOptions));
app.use(express.json({ limit: '50mb' }));


LoginRoutes(app)
SignupRoutes(app)
UserRoutes(app)
PictureRoutes(app)
MessageRoutes(app)
AudioCallingRoutes(app)
VideoCallingRoutes(app)

// httpServer.listen(process.env.PORT || 4000);

const port = process.env.PORT || 4000;

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});