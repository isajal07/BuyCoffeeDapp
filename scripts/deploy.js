const hre = require("hardhat");

async function main() {
  const Coffee = await hre.ethers.getContractFactory("Coffee"); //Fetching bytecode and ABI
  const coffee = await Coffee.deploy(); // Creating an instance of our smart contract

  await coffee.waitForDeployment(); // Deploying your smart contract

  console.log(`Deployed contract address: ${coffee.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
