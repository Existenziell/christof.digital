export const code = `if (metamask) {
  // Using ethers.js to interact with Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
  // Prompt user for account connections
  await provider.send('eth_requestAccounts', [])
  // Check if Metamask is on Polygon Testnet (80001)
  const network = await provider.getNetwork()
  if (network.chainId == 80001) {
    const signer = provider.getSigner()
    const contract = new ethers.Contract(address, abi, signer)
    const address = await signer.getAddress()
    const transaction = await contract.mint(address, mintAmount)
    await transaction.wait()
      .then((receipt) => {
        setTxHash(receipt.transactionHash)
      })
  } else {
    console.error('Please change network to Polygon Testnet in Metamask.')
  }
} else {
  console.error('Please install Metamask to proceed.')
}`
