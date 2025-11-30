class TextBuffer  {
    constructor() {
        this.lines = []
    }

    getLine(index) {
        return this.lines[index]
    }

    insertLine(index, text) {
        this.lines.splice(index, 0, text)
    }

    deleteLine(index) {
        const deletedElement = this.lines.splice(index, 1)
        return deletedElement[0]
    }

    modifyLine(index, text) {
        this.lines[index] = text
    }

    getAllLines() {
        return [...this.lines]
    }

    getLineCount() {
        return this.lines.length
    }

    replaceAll(lines) {
        this.lines = [...lines];
    }
}

export default TextBuffer;
