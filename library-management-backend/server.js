const app = require('./src/app');

const PORT = 8000;

const server = app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log('Exit server'));
});