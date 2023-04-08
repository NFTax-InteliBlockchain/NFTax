const ContractService = require('../services/contract.service');
const { getContractData, scrapContractMarketInfos } = require('../utils/contract.util');

class ContractController {
	async getBalanceOfContract(req, res) {
		const { deployedContractAbi, deployedContractAddress, address } = req.body;

		const balance = await ContractService.getBalanceOfContract(deployedContractAbi, deployedContractAddress, address);

		return res.json({ balance });
	}

	async getURIOfContract(req, res) {
		const { deployedContractAbi, deployedContractAddress } = req.body;

		const uri = await ContractService.getURIOfContract(deployedContractAbi, deployedContractAddress);

		return res.json({ uri });
	}

	async getContractOfInvestment(req, res) {
		try {
			const { deployedContractAbi, deployedContractAddress } = getContractData(req.params.name);
			const address = req.body.address;
			const contractInfos = await ContractService.getAllcontractInfos(deployedContractAbi, deployedContractAddress, address);
			const contractMarketInfos = await scrapContractMarketInfos(contractInfos.uri);
			return res.json({
				contract: contractInfos,
				market: contractMarketInfos
			});
		} catch(err){
			console.log(`[Error]: ${err}`);

			return res.status(400).json({ message: 'Contract not found or other error' });
		}
	}
}

module.exports = new ContractController();
