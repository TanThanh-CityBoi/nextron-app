import { envConfig } from './env.config';
import * as dotenv from 'dotenv';
dotenv.config(envConfig);

export const API_CONFIG = {
    API_URL: process.env.API_URL || 'http://localhost:4000/api',
};
