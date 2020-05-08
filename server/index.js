import app from './app.js';
import './db.js';

const PORT = 4000;

app.listen(process.env.PORT || PORT , () => {
    console.log(`✔ Server On : http://localhost:${PORT}`);
});