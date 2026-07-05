const express = require('express');
const auth = require('./middleware/auth');
const transactionController = require('./controllers/transaction_controller');

const app = express();
app.use(express.json());

app.post('/transaction', auth, transactionController.sendTransaction);

app.listen(3000, () => {
    console.log("Financial System running on port 3000");
});
