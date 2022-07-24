import 'jasmine';
import { DataModel } from '../../../src/data-model';
import { TextValue } from '../../../src/column';

class TestModel extends DataModel {
	public foo: TextValue = 'bar';
}

describe('Data Model', () => {
	it('exports a data model interface', () => {
		const model = new TestModel();

		expect(model.foo).toEqual('bar');
	});
});
