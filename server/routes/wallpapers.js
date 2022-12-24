const express = require('express');
const OpenAI = require('openai');
const { requireAuth } = require('./middleware');

const { Configuration, OpenAIApi } = OpenAI;
const configuration = new Configuration({
  organization: 'org-pQX2b6Viz83F0p2qJYHaaZ81',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const router   = express.Router();
module.exports = router;

router.post('/', requireAuth, async(req, res) => {
  try {

    const body = {
      prompt: req.body && req.body.text,
      model: 'image-alpha-001',
      num_images: 4,
      size: '256x256',
    };
    const response = await openai.createImage(body);
    console.log('###response.data', response.data);
    res.send(response.data.data);
  } catch (error) {
    console.error('###error in DALLE', error.response);
    res.status(500).send(error.message);
  }
});
