import express from 'express';
import cors from 'cors';
import productRouter from './src/routes/products_route.js'


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
// Register API routes
app.use("/api/v1", productRouter);

// Catch unregistered routes
app.all("*", (req, res) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}` );
});

export default app;
