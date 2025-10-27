import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

// reconstituer __dirname pour ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure EJS templating
app.set('view engine', 'ejs');
// Point to the views directory relative to this file.
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory.
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));

// In-memory list of articles (replace with database later)
let articles = [
  {
    id: 1,
    code_article: 'ART001',
    designation: 'Paracétamol 500 mg',
    stock: 50,
    prix_unitaire: 1500,
    avec_tva: true,
  },
  {
    id: 2,
    code_article: 'ART002',
    designation: 'Ibuprofène 400 mg',
    stock: 30,
    prix_unitaire: 2000,
    avec_tva: false,
  },
];

// Redirect root to list of articles
app.get('/', (req, res) => {
  res.redirect('/articles');
});

// Display list of articles
app.get('/articles', (req, res) => {
  res.render('index', { articles });
});

// Form to add new article
app.get('/articles/add', (req, res) => {
  res.render('form');
});

// Handle submission of new article
app.post('/articles/add', (req, res) => {
  const { code_article, designation, stock, prix_unitaire, avec_tva } = req.body;
  // Create new article object
  const newArticle = {
    id: articles.length + 1,
    code_article,
    designation,
    stock: parseInt(stock, 10) || 0,
    prix_unitaire: parseFloat(prix_unitaire) || 0,
    avec_tva: avec_tva === 'on',
  };
  // Add to the front of the array
  articles.unshift(newArticle);
  // Redirect back to list
  res.redirect('/articles');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});