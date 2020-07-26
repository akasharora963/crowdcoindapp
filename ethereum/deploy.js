const HDwalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require('web3');

const compileFactory = require('./build/CampaignFactory.json');

const provider = new HDwalletProvider(
  '',//Add metamask mnemonics
  ''//Add infura link
);
//const init_string= 'Hi there';
const web3 = new Web3(provider);

const deploy = async () =>{

  const accounts= await web3.eth.getAccounts();
  console.log('Attempt to deploy from account ', accounts[0]);

  const result = await  new web3.eth.Contract(JSON.parse(compileFactory.interface))
                           .deploy({ data : '0x' + compileFactory.bytecode })
                           .send({ from : accounts[0] });

  console.log('Contract deploy to ', result.options.address);
};

deploy();
