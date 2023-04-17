const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chains: [],
    getLength() {
        return this.str.length
    },
    addLink(value) {
        this.chains.push(`( ${value} )`);
        return this
    },
    removeLink(position) {
        if (typeof position !== "number" || position > this.chains.length || position <= 0 || !Number.isInteger(position)) {
            this.chains = [];
            throw new Error("You can't remove incorrect link!")
        }
        this.chains.splice(position - 1, 1);
        return this
    },
    reverseChain() {
        this.chains.reverse();
        return this
    },
    finishChain() {
        let str = this.chains.flat().join("~~");
        this.chains = [];
        return str;
    }
};

module.exports = {
    chainMaker
};
