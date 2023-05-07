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

router.get('/overview', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/overview.html'));
});

router.get('/education-and-employment-history', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/history.html'));
});

router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/projects.html'));
});