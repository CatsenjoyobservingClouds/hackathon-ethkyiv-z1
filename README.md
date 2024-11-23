# hackathon-ethkyiv-z1
provide code for Solidity 0.8.0 smart contract Vault, with FHE cypher secure storage, which should do lending of USDT token holders and borrowing of USDT to requesting accounts; 

For Borrowing Vault should call smart contract Score, which fetches history data of borrowing for account and if returned score is higher then 0.8 sends USDT tokens to borrowers; Accounts could also add liquidity for lending purposes via sending to Vault USDT tokens; 

Vault contract should maintain mapping of lenders and mapping of borrowers with FHE encrypted balances and decrypt them on request of Score smartcontract;

