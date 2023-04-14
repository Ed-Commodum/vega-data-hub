const depositWithdrawalEnums = {
    status: {
        // Default value, always invalid
        STATUS_UNSPECIFIED: 0,
        // The deposit is being processed by the network
        STATUS_OPEN: 1,
        // The deposit has been cancelled by the network
        STATUS_CANCELLED: 2,
        // The deposit has been finalised and accounts have been updated
        STATUS_FINALIZED: 3,
    }
}

const depositWithdrawalEnumMappings = {
    status: {
        [depositWithdrawalEnums.status.STATUS_UNSPECIFIED]: "STATUS_UNSPECIFIED",
        [depositWithdrawalEnums.status.STATUS_OPEN]: "STATUS_OPEN",
        [depositWithdrawalEnums.status.STATUS_CANCELLED]: "STATUS_CANCELLED",
        [depositWithdrawalEnums.status.STATUS_FINALIZED]: "STATUS_FINALIZED"
    }
}

module.exports = {
    depositWithdrawalEnums,
    depositWithdrawalEnumMappings
}