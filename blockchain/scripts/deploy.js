const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("Unveil");
  const contract = await Contract.deploy(); 

  await contract.waitForDeployment(); 

  console.log(`✅ Contract deployed at: ${contract.target}`); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
