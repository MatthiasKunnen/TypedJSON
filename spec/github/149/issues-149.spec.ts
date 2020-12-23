import {jsonMember, jsonObject, TypedJSON} from '../../../src';

describe('Github issue 149', () => {
    @jsonObject
    class Foo {
        @jsonMember({constructor: String})
        bar: string = 'bar';
    }

    it('should handle default values', () => {
        expect(TypedJSON.parse({}, Foo).bar).toEqual('bar');
        expect(TypedJSON.parse({bar: undefined}, Foo).bar).toEqual('bar');
        expect(TypedJSON.parse({bar: null}, Foo).bar).toEqual('bar');
    });
});
