import express from "express";
import path from 'path';

export const router = express.Router();
const __dirname = path.resolve();

router.use((req, res, next) => {
    console.log(new Date().toDateString(),'',new Date().toTimeString(),'', req.method, '', req.path);
    next();
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

router.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/portfolio.html'));
});