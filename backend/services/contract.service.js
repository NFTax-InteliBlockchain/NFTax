const Web3 = require('web3');
const Web3Quorum = require('web3js-quorum');

require('dotenv').config();

class ContractService {
	constructor() {
		this.web3 = new Web3Quorum(new Web3(process.env.RPC_URL));
	}

	async getBalanceOfContract(deployedContractAbi, deployedContractAddress, address) {
		const contract = new this.web3.eth.Contract(deployedContractAbi, deployedContractAddress);

		const balance = await contract.methods.balanceOf(address, 0).call();

		return balance;
	}

	async getURIOfContract(deployedContractAbi, deployedContractAddress) {
		const contract = new this.web3.eth.Contract(deployedContractAbi, deployedContractAddress);

		const uri = await contract.methods.uri(0).call();

		return uri;
	}

	async getAllcontractInfos(deployedContractAbi, deployedContractAddress, address) {
		const contract = new this.web3.eth.Contract(deployedContractAbi, deployedContractAddress);

		const balance = await contract.methods.balanceOf(address, 0).call();
		const uri = await contract.methods.uri(0).call();

		return { balance, uri };
	}
}

module.exports = new ContractService();
