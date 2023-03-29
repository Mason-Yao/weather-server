class Cache {

    constructor() {
        this.data = new Map();
    }

    has(key) {
        return this.data.has(key);
    }

    get(key) {
        return this.data.get(key).value;
    }

    set(key, value, ttl) {
        if (this.data.has(key)) {
            clearTimeout(this.data.get(key).timeout);
        }
        const timeout = setTimeout(() => {
            this.data.delete(key);
        }, ttl)
        this.data.set(key, {value, timeout});
    }
}

module.exports = new Cache()