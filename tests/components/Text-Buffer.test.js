const assert = require('assert');
const { TextBuffer } = require('../../src/components/Text-Buffer');

describe('TextBuffer', () => {
    it('should initialize with zero lines', () => {
        const buffer = new TextBuffer();
        assert.strictEqual(buffer.getLineCount(), 0);
    });

    it('should get the correct line, add at the beggining, end and middle', () => {
        const buffer = new TextBuffer();
        const text0 = 'test 0'
        const text1 = 'test 1'
        const text2 = 'test 2'

        buffer.insertLine(0, text0)
        buffer.insertLine(1, text1)
        buffer.insertLine(3, text2)
        buffer.insertLine(2, text0)

        assert.strictEqual(buffer.getLine(0), text0);
        assert.strictEqual(buffer.getLine(1), text1);
        assert.strictEqual(buffer.getLine(2), text0);
        assert.strictEqual(buffer.getLine(3), text2);
        assert.strictEqual(buffer.getLineCount(), 4)
    })

    it('should delete a line', () => {
        const buffer = new TextBuffer();
        const text0 = 'test 0'
        const text1 = 'test 1'
        const text2 = 'test 2'

        buffer.insertLine(0, text0)
        buffer.insertLine(1, text1)
        buffer.insertLine(3, text2)
        buffer.insertLine(2, text0)

        assert.strictEqual(buffer.getLineCount(), 4)

        buffer.deleteLine(2)

        assert.strictEqual(buffer.getLineCount(), 3)
        assert.strictEqual(buffer.getLine(3), undefined)
    })

    it('should modify a line', () => {
        const buffer = new TextBuffer();
        
        const text0 = 'text 0' 

        buffer.insertLine(0, text0)

        assert.strictEqual(buffer.getLine(0), text0);
        assert.strictEqual(buffer.getLineCount(), 1)
        const text0Modified = 'text 0 + hello' 

        buffer.modifyLine(0, text0Modified);
        assert.notDeepEqual(buffer.getLine(0), text0);
        assert.strictEqual(buffer.getLine(0), text0Modified);
    })
});
