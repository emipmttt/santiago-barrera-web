const express = require('express')
const app = express();

app.get('/echo/:what', (req, res) => {
  res.json(req.params)
})

const router = express.Router();

router.post('/magia', (req, res) => {
  res.json({
    ok: true
  })
});

app.use(router);

export default app;
