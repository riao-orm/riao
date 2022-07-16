import 'jasmine';
import { DataModel } from 'data-model';

describe('Data Model', () => {
	it('exports a data model interface', () => {
		const model: DataModel = {
			foo: 'bar'
		};

		expect(model.foo).toEqual('bar');
	});
});
