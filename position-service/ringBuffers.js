class RingBuffer {
    constructor(limit) {
        this.values = [];
        this.limit = limit;
        this.length = 0;
    };

    push(elem) {
        this.values.push(elem);
        if (this.values.length > this.limit) {
            this.values.shift();
        };
        this.length = this.values.length;
    };

    latest() {
        return this.values[this.values.length-1];
    }
};

class RecentBlocks extends RingBuffer {
    constructor(limit) {
        super(limit);
    };

    get(height) {
        return this.values.find(elem => elem.height == height);
    }

}

class RecentPositionUpdates extends RingBuffer {
    constructor(limit) {
        super(limit);
    };

    getByBlock(height) {
        // Returns all updates that occured in a particular block
        const result = [];
        for (let element of this.values) {
            if (parseInt(element.id.split('-')[0]) == height) {
                
            }
        }
    }
}

module.exports = {
    RecentBlocks,
    RecentPositionUpdates
}