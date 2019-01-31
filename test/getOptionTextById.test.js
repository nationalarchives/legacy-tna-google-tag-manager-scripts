import { getOptionTextById } from '../src/modules/getOptionTextById';

describe('Simulate change', () => {
        it('Should be null', () => {
            document.body.innerHTML = `
                <select id="pet-select">
                    <option>--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot" selected="selected">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>`;
                
                expect(getOptionTextById('blah')).toBeNull();
                expect(getOptionTextById()).toBeNull();
                expect(getOptionTextById('pet-select')).not.toBeNull();
                expect(getOptionTextById(1)).toBeNull();
                expect(getOptionTextById('pet-select')).toBe('Parrot');
        
        });
});

describe('Simulate change event', () => {
    it('Should be null', () => {
            document.body.innerHTML = `<select id="pet"></select>`;
                expect(getOptionTextById('pet')).toBeNull();
        });
});