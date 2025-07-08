const hre = require("hardhat");

async function main() {
  const FairLens = await hre.ethers.getContractFactory("FairLens");
  const fairLens = await FairLens.deploy(); // deploys the contract
  await fairLens.waitForDeployment(); // ✅ This is the correct function in Hardhat Ethers v6+
  
  const deployedAddress = await fairLens.getAddress();
  console.log("FairLens deployed to:", deployedAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
