const accountEnums = {
    type: {
        // Default value
        ACCOUNT_TYPE_UNSPECIFIED: 0,
        // Insurance pool accounts contain insurance pool funds for a market
        ACCOUNT_TYPE_INSURANCE: 1,
        // Settlement accounts exist only during settlement or mark-to-market
        ACCOUNT_TYPE_SETTLEMENT: 2,
        // Margin accounts contain funds set aside for the margin needed to support a party's open positions.
        // Each party will have a margin account for each market they have traded in.
        // The required initial margin is allocated to each market from your general account.
        // Collateral in the margin account can't be withdrawn or used as margin on another market until
        // it is released back to the general account.
        // The Vega protocol uses an internal accounting system to segregate funds held as
        // margin from other funds to ensure they are never lost or 'double spent'
        //
        // Margin account funds will vary as margin requirements on positions change
        ACCOUNT_TYPE_MARGIN: 3,
        // General accounts contain the collateral for a party that is not otherwise allocated. A party will
        // have multiple general accounts, one for each asset they want
        // to trade with
        //
        // General accounts are where funds are initially deposited or withdrawn from,
        // it is also the account where funds are taken to fulfil fees and initial margin requirements
        ACCOUNT_TYPE_GENERAL: 4,
        // Infrastructure accounts contain fees earned by providing infrastructure on Vega
        ACCOUNT_TYPE_FEES_INFRASTRUCTURE: 5,
        // Liquidity accounts contain fees earned by providing liquidity on Vega markets
        ACCOUNT_TYPE_FEES_LIQUIDITY: 6,
        // This account is created to hold fees earned by placing orders that sit on the book
        // and are then matched with an incoming order to create a trade - These fees reward parties
        // who provide the best priced liquidity that actually allows trading to take place
        ACCOUNT_TYPE_FEES_MAKER: 7,
        // This account is created to maintain liquidity providers funds commitments
        ACCOUNT_TYPE_BOND: 9,
    
        // External account represents an external source (deposit/withdrawal)
        ACCOUNT_TYPE_EXTERNAL: 10,
    
        // Global insurance account for the asset
        ACCOUNT_TYPE_GLOBAL_INSURANCE: 11,
    
        // Global reward account for the asset
        ACCOUNT_TYPE_GLOBAL_REWARD: 12,
    
        // Per asset account used to store pending transfers (if any)
        ACCOUNT_TYPE_PENDING_TRANSFERS: 13,
    
        // Per asset reward account for fees paid to makers
        ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES: 14,
    
        // Per asset reward account for fees received by makers
        ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES: 15,
    
        // Per asset reward account for fees received by liquidity providers
        ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES: 16,
    
        // Per asset reward account for market proposers when the market goes above some trading threshold
        ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS: 17,
    }
}

const accountEnumMappings = {
    type: {
        [accountEnums.type.ACCOUNT_TYPE_UNSPECIFIED]: "ACCOUNT_TYPE_UNSPECIFIED",
        [accountEnums.type.ACCOUNT_TYPE_INSURANCE]: "ACCOUNT_TYPE_INSURANCE",
        [accountEnums.type.ACCOUNT_TYPE_SETTLEMENT]: "ACCOUNT_TYPE_SETTLEMENT",
        [accountEnums.type.ACCOUNT_TYPE_MARGIN]: "ACCOUNT_TYPE_MARGIN",
        [accountEnums.type.ACCOUNT_TYPE_GENERAL]: "ACCOUNT_TYPE_GENERAL",
        [accountEnums.type.ACCOUNT_TYPE_FEES_INFRASTRUCTURE]: "ACCOUNT_TYPE_FEES_INFRASTRUCTURE",
        [accountEnums.type.ACCOUNT_TYPE_FEES_LIQUIDITY]: "ACCOUNT_TYPE_FEES_LIQUIDITY",
        [accountEnums.type.ACCOUNT_TYPE_FEES_MAKER]: "ACCOUNT_TYPE_FEES_MAKER",
        [accountEnums.type.ACCOUNT_TYPE_BOND]: "ACCOUNT_TYPE_BOND",
        [accountEnums.type.ACCOUNT_TYPE_EXTERNAL]: "ACCOUNT_TYPE_EXTERNEL",
        [accountEnums.type.ACCOUNT_TYPE_GLOBAL_INSURANCE]: "ACCOUNT_TYPE_GLOBAL_INSURANCE",
        [accountEnums.type.ACCOUNT_TYPE_GLOBAL_REWARD]: "ACCOUNT_TYPE_GLOBAL_REWARD",
        [accountEnums.type.ACCOUNT_TYPE_PENDING_TRANSFERS]: "ACCOUNT_TYPE_PENDING_TRANSFERS",
        [accountEnums.type.ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES]: "ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES",
        [accountEnums.type.ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES]: "ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES",
        [accountEnums.type.ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES]: "ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES",
        [accountEnums.type.ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS]: "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS"

    }
}

module.exports = {
    accountEnums,
    accountEnumMappings
}