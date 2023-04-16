const assetEnums = {
    status: {
        // Default value, always invalid
        STATUS_UNSPECIFIED: 0,
        // Asset is proposed and under vote
        STATUS_PROPOSED: 1,
        // Asset has been rejected from governance
        STATUS_REJECTED: 2,
        // Asset is pending listing from the bridge
        STATUS_PENDING_LISTING: 3,
        // Asset is fully usable in the network
        STATUS_ENABLED: 4
    }
}

const assetEnumMappings = {
    status: {
        [ assetEnums.status.STATUS_UNSPECIFIED ]: "STATUS_UNSPECIFIED",
        [ assetEnums.status.STATUS_PROPOSED ]: "STATUS_PROPOSED",
        [ assetEnums.status.STATUS_REJECTED ]: "STATUS_REJECTED",
        [ assetEnums.status.STATUS_PENDING_LISTING ]: "STATUS_PENDING_LISTING",
        [ assetEnums.status.STATUS_ENABLED ]: "STATUS_ENABLED"
    }
}

module.exports = {
    assetEnums,
    assetEnumMappings
}