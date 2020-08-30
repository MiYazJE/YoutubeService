const express = require('express');
const app = express();

app.use('/api/v1', require('./app/routes/routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Youtube service up on port ' + PORT))