const { write } = require('./build/Release/io_uring.node');
const { Writable } = require('stream');

class FileWriter extends Writable {
    constructor({fd, offset }) {
        super();
        this.fd = fd;
        this.offset = offset || 0;
    }

    _write(data, encoding, cb) {
	write(this.fd, data, (error,offset) => {
	    if (error) {
                cb(error);
            } else {
                this.offset += offset;
                cb();
            }
        }, this.offset);
    }
}

module.exports = {
    FileWriter
};
