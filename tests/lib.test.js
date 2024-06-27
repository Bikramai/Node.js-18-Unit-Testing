const lib = require('../lib');

describe('absolute', () => {
});

describe('greet', () => {
    it('should return the  greeting message', () => {
        const result = lib.greet('Bikram');
        expect(result).toMatch(/Bikram/);
        expect(result).toContain('Bikram');
    });
});