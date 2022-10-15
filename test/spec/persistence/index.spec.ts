import 'jasmine';
import { PersistenceDriver } from 'persistence';

describe('Persistance', () => {
	it('exports a persistance driver interface', () => {
		const driver: PersistenceDriver = {};

		expect(driver).toEqual({});
	});
});
