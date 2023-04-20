const transferEnums = {
    status: {
        // Default value
        STATUS_UNSPECIFIED: 0,
        // Indicates a transfer still being processed
        STATUS_PENDING: 1,
        // Indicates a transfer accepted by the Vega network
        STATUS_DONE: 2,
        // Indicates a transfer rejected by the Vega network
        STATUS_REJECTED: 3,
        // Indicates a transfer stopped by the Vega network
        // e.g: no funds left to cover the transfer
        STATUS_STOPPED: 4,
        // Indicates a transfer cancelled by the user
        STATUS_CANCELLED: 5
    },
    accountType: {
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
    },
    type: {
        // Default value, always invalid
        TRANSFER_TYPE_UNSPECIFIED: 0,
        // Funds deducted after final settlement loss
        TRANSFER_TYPE_LOSS: 1,
        // Funds added to general account after final settlement gain
        TRANSFER_TYPE_WIN: 2,
        // Funds deducted from margin account after mark to market loss
        TRANSFER_TYPE_MTM_LOSS: 4,
        // Funds added to margin account after mark to market gain
        TRANSFER_TYPE_MTM_WIN: 5,
        // Funds transferred from general account to meet margin requirement
        TRANSFER_TYPE_MARGIN_LOW: 6,
        // Excess margin amount returned to general account
        TRANSFER_TYPE_MARGIN_HIGH: 7,
        // Margin confiscated from margin account to fulfil closeout
        TRANSFER_TYPE_MARGIN_CONFISCATED: 8,
        // Maker fee paid from general account
        TRANSFER_TYPE_MAKER_FEE_PAY: 9,
        // Maker fee received into general account
        TRANSFER_TYPE_MAKER_FEE_RECEIVE: 10,
        // Infrastructure fee paid from general account
        TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY: 11,
        // Infrastructure fee received into general account
        TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE: 12,
        // Liquidity fee paid from general account
        TRANSFER_TYPE_LIQUIDITY_FEE_PAY: 13,
        // Liquidity fee received into general account
        TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE: 14,
        // Bond account funded from general account to meet required bond amount
        TRANSFER_TYPE_BOND_LOW: 15,
        // Bond returned to general account after liquidity commitment was reduced
        TRANSFER_TYPE_BOND_HIGH: 16,
        // Funds withdrawn from general account
        TRANSFER_TYPE_WITHDRAW: 18,
        // Funds deposited to general account
        TRANSFER_TYPE_DEPOSIT: 19,
        // Bond account penalised when liquidity commitment not met
        TRANSFER_TYPE_BOND_SLASHING: 20,
        // Reward payout received
        TRANSFER_TYPE_REWARD_PAYOUT: 21,
        // A network internal instruction for the collateral engine to move funds from a user's general account into the pending transfers pool
        TRANSFER_TYPE_TRANSFER_FUNDS_SEND: 22,
        // A network internal instruction for the collateral engine to move funds from the pending transfers pool account into the destination account
        TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE: 23,
        // Market-related accounts emptied because market has closed
        TRANSFER_TYPE_CLEAR_ACCOUNT: 24,
        // Balances restored after network restart
        TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE: 25
    }
}

const transferEnumMappings = {
    status: {
        [transferEnums.status.STATUS_UNSPECIFIED]: "STATUS_UNSPECIFIED",
        [transferEnums.status.STATUS_PENDING]: "STATUS_PENDING",
        [transferEnums.status.STATUS_DONE]: "STATUS_DONE",
        [transferEnums.status.STATUS_REJECTED]: "STATUS_REJECTED",
        [transferEnums.status.STATUS_STOPPED]: "STATUS_STOPPED",
        [transferEnums.status.STATUS_CANCELLED]: "STATUS_CANCELLED"
    },
    accountType: {
        [transferEnums.accountType.ACCOUNT_TYPE_UNSPECIFIED]: "ACCOUNT_TYPE_UNSPECIFIED",
        [transferEnums.accountType.ACCOUNT_TYPE_INSURANCE]: "ACCOUNT_TYPE_INSURANCE",
        [transferEnums.accountType.ACCOUNT_TYPE_SETTLEMENT]: "ACCOUNT_TYPE_SETTLEMENT",
        [transferEnums.accountType.ACCOUNT_TYPE_MARGIN]: "ACCOUNT_TYPE_MARGIN",
        [transferEnums.accountType.ACCOUNT_TYPE_GENERAL]: "ACCOUNT_TYPE_GENERAL",
        [transferEnums.accountType.ACCOUNT_TYPE_FEES_INFRASTRUCTURE]: "ACCOUNT_TYPE_FEES_INFRASTRUCTURE",
        [transferEnums.accountType.ACCOUNT_TYPE_FEES_LIQUIDITY]: "ACCOUNT_TYPE_FEES_LIQUIDITY",
        [transferEnums.accountType.ACCOUNT_TYPE_FEES_MAKER]: "ACCOUNT_TYPE_FEES_MAKER",
        [transferEnums.accountType.ACCOUNT_TYPE_BOND]: "ACCOUNT_TYPE_BOND",
        [transferEnums.accountType.ACCOUNT_TYPE_EXTERNAL]: "ACCOUNT_TYPE_EXTERNEL",
        [transferEnums.accountType.ACCOUNT_TYPE_GLOBAL_INSURANCE]: "ACCOUNT_TYPE_GLOBAL_INSURANCE",
        [transferEnums.accountType.ACCOUNT_TYPE_GLOBAL_REWARD]: "ACCOUNT_TYPE_GLOBAL_REWARD",
        [transferEnums.accountType.ACCOUNT_TYPE_PENDING_TRANSFERS]: "ACCOUNT_TYPE_PENDING_TRANSFERS",
        [transferEnums.accountType.ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES]: "ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES",
        [transferEnums.accountType.ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES]: "ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES",
        [transferEnums.accountType.ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES]: "ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES",
        [transferEnums.accountType.ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS]: "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS"
    },
    type: {
        [transferEnums.type.TRANSFER_TYPE_UNSPECIFIED]: "TRANSFER_TYPE_UNSPECIFIED",
        [transferEnums.type.TRANSFER_TYPE_LOSS]: "TRANSFER_TYPE_LOSS",
        [transferEnums.type.TRANSFER_TYPE_WIN]: "TRANSFER_TYPE_WIN",
        [transferEnums.type.TRANSFER_TYPE_MTM_LOSS]: "TRANSFER_TYPE_MTN_LOSS",
        [transferEnums.type.TRANSFER_TYPE_MTM_WIN]: "TRANSFER_TYPE_MTN_WIN",
        [transferEnums.type.TRANSFER_TYPE_MARGIN_LOW]: "TRANSFER_TYPE_MARGIN_LOW",
        [transferEnums.type.TRANSFER_TYPE_MARGIN_HIGH]: "TRANSFER_TYPE_MARGIN_HIGH",
        [transferEnums.type.TRANSFER_TYPE_MARGIN_CONFISCATED]: "TRANSFER_TYPE_MARGIN_CONFISCATED",
        [transferEnums.type.TRANSFER_TYPE_MAKER_FEE_PAY]: "TRANSFER_TYPE_MAKER_FEE_PAY",
        [transferEnums.type.TRANSFER_TYPE_MAKER_FEE_RECEIVE]: "TRANSFER_TYPE_MAKER_FEE_RECEIVE",
        [transferEnums.type.TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY]: "TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY",
        [transferEnums.type.TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE]: "TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE",
        [transferEnums.type.TRANSFER_TYPE_LIQUIDITY_FEE_PAY]: "TRANSFER_TYPE_LIQUIDITY_FEE_PAY",
        [transferEnums.type.TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE]: "TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE",
        [transferEnums.type.TRANSFER_TYPE_BOND_LOW]: "TRANSFER_TYPE_BOND_LOW",
        [transferEnums.type.TRANSFER_TYPE_BOND_HIGH]: "TRANSFER_TYPE_BOND_HIGH",
        [transferEnums.type.TRANSFER_TYPE_WITHDRAW]: "TRANSFER_TYPE_WITHDRAW",
        [transferEnums.type.TRANSFER_TYPE_DEPOSIT]: "TRANSFER_TYPE_DEPOSIT",
        [transferEnums.type.TRANSFER_TYPE_BOND_SLASHING]: "TRANSFER_TYPE_BOND_SLASHING",
        [transferEnums.type.TRANSFER_TYPE_REWARD_PAYOUT]: "TRANSFER_TYPE_REWARD_PAYOUT",
        [transferEnums.type.TRANSFER_TYPE_TRANSFER_FUNDS_SEND]: "TRANSFER_TYPE_TRANSFER_FUNDS_SEND",
        [transferEnums.type.TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE]: "TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE",
        [transferEnums.type.TRANSFER_TYPE_CLEAR_ACCOUNT]: "TRANSFER_TYPE_CLEAR_ACCOUNT",
        [transferEnums.type.TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE]: "TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE"
    }
}

module.exports = {
    transferEnums,
    transferEnumMappings
}