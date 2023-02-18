const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


const cohere = require('cohere-ai');
cohere.init('{your api key here}');

app.get('/api', async (req, res) => {
  const response = await cohere.generate({
    model: 'command-xlarge-nightly',
    prompt: `${req.query.prompt}`,
    max_tokens: 400,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  res.json(response.body);
});