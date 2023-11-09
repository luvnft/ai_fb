// SPDX-License-Identifier: MIT
// 0x4861825E75ab14553E5aF711EbbE6873d369d146
// musicai.mintspace2.testnet
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AuroraSdk, NEAR, PromiseCreateArgs} from "@auroraisnear/aurora-sdk/aurora-sdk/AuroraSdk.sol";

contract NFT {
    using AuroraSdk for NEAR;  
    using AuroraSdk for PromiseCreateArgs;  

    uint64 constant COUNTER_NEAR_GAS = 10_000_000_000_000;
    
    NEAR public near;
    string mintbaseAccountId;

    constructor(address wnearAddress, string memory mintbaseNearAccountId) {
        near = AuroraSdk.initNear(IERC20(wnearAddress));
        mintbaseAccountId = mintbaseNearAccountId;
    }

    function incrementXCC() external {
        bytes memory args = bytes('{"num_to_mint": 1, "owner_id": "nearcon.mintbase.testnet", metadata: {} }');
        PromiseCreateArgs memory callMintbase = near.call(
            mintbaseAccountId,
            "nft_batch_mint",
            args,
            0,
            COUNTER_NEAR_GAS
        );
        callMintbase.transact();
    }

}


