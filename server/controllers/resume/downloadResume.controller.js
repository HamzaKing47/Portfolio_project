import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadResume = (req, res) => {
  const filePath = path.join(__dirname, 'Ameer_Hamza_Resume.pdf'); 
  res.download(filePath, 'Ameer_Hamza_Resume.pdf', (err) => {
    if (err) {
      res.status(500).send({ error: 'Could not download the file.' });
    }
  });
};

export default downloadResume;
