const ContractController = require('../controllers/contract.controller');
const express = require('express');
const router = express.Router();

router.get('/balance', ContractController.getBalanceOfContract);
router.get('/uri', ContractController.getURIOfContract);
router.post('/investment/:name', ContractController.getContractOfInvestment);

module.exports = router;
