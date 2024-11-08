const controller = require('../controller');

describe('Controller Tests', () => {
    it('should return expected output for input 1', () => {
        expect(controller.someFunction(1)).toBe('expected output');
    });

    it('should handle edge case input', () => {
        expect(controller.someFunction(0)).toBe('edge case output');
    });
});