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

module.exports = {
    RecentBlocks
}