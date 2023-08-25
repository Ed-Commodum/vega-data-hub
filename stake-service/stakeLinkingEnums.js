const stakeLinkingEnums = {
    
    type: {
        // Default value
        TYPE_UNSPECIFIED: 0,
        // Indicate of a stake deposit instruction
        TYPE_LINK: 1,
        // Indicate of a stake remove instruction
        TYPE_UNLINK: 2
    },

    status: {
        // Default value
        STATUS_UNSPECIFIED: 0,
        // Indicates an event waiting for confirmation from the Vega network
        STATUS_PENDING: 1,
        // Indicates an event accepted by the Vega network
        STATUS_ACCEPTED: 2,
        // Indicates an event rejected by the Vega network
        STATUS_REJECTED: 3
    }
}

const stakeLinkingEnumMappings = {
    type: {
        [stakeLinkingEnums.type.TYPE_UNSPECIFIED]: 'TYPE_UNSPECIFIED',
        [stakeLinkingEnums.type.TYPE_LINK]: 'TYPE_LINK',
        [stakeLinkingEnums.type.TYPE_UNLINK]: 'TYPE_UNLINK'
    },
    status: {
        [stakeLinkingEnums.status.STATUS_UNSPECIFIED]: 'STATUS_UNSPECIFIED',
        [stakeLinkingEnums.status.STATUS_PENDING]: 'STATUS_PENDING',
        [stakeLinkingEnums.status.STATUS_ACCEPTED]: 'STATUS_ACCEPTED',
        [stakeLinkingEnums.status.STATUS_REJECTED]: 'STATUS_REJECTED'
    }
}

module.exports = {
    stakeLinkingEnums,
    stakeLinkingEnumMappings
}