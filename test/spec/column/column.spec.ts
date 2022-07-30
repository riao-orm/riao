import 'jasmine';

import { DataType } from '../../../src/data-type';
import { AllColumnTypes } from '../../models/all-column-types';
import { testDefinition } from './test-column-definition';

describe('Column', () => {
	const instance = new AllColumnTypes();

	it('can get all columns', () => {
		const keys = Object.getOwnPropertyNames(instance);

		expect(keys.length).toBeGreaterThanOrEqual(1);
	});

	it('has a bool', () => {
		testDefinition(instance, {
			name: 'myBool',
			type: DataType.BOOL,
			default: false,
		});
	});

	it('has a single bit', () => {
		testDefinition(instance, {
			name: 'mySingleBit',
			type: DataType.BIT,
			default: 0,
		});
	});

	it('has a multi bit', () => {
		testDefinition(instance, {
			name: 'myMultiBit',
			type: DataType.BIT,
			default: [0, 1],
			length: 2,
		});
	});

	it('has a tiny int', () => {
		testDefinition(instance, {
			name: 'myTinyInt',
			type: DataType.TINYINT,
			default: 5,
		});
	});

	it('has a small int', () => {
		testDefinition(instance, {
			name: 'mySmallInt',
			type: DataType.SMALLINT,
			default: 5,
		});
	});

	it('has an int', () => {
		testDefinition(instance, {
			name: 'myInt',
			type: DataType.INT,
			default: 5,
		});
	});

	it('has a big int', () => {
		testDefinition(instance, {
			name: 'myBigInt',
			type: DataType.BIGINT,
			default: 5,
		});
	});

	it('has a decimal', () => {
		testDefinition(instance, {
			name: 'myDecimal',
			type: DataType.DECIMAL,
			default: 10.32,
			significant: 12,
			decimal: 2
		});
	});

	it('has a float', () => {
		testDefinition(instance, {
			name: 'myFloat',
			type: DataType.FLOAT,
			default: 10.32,
		});
	});

	it('has a double', () => {
		testDefinition(instance, {
			name: 'myDouble',
			type: DataType.DOUBLE,
			default: 10.32,
		});
	});

	it('has a small money', () => {
		testDefinition(instance, {
			name: 'mySmallMoney',
			type: DataType.SMALLMONEY,
			default: 10.32,
		});
	});

	it('has a money', () => {
		testDefinition(instance, {
			name: 'myMoney',
			type: DataType.MONEY,
			default: 10.32,
		});
	});

	it('has a date', () => {
		testDefinition(instance, {
			name: 'myDate',
			type: DataType.DATE,
		});
	});

	it('has a time', () => {
		testDefinition(instance, {
			name: 'myTime',
			type: DataType.TIME,
		});
	});

	it('has a datetime', () => {
		testDefinition(instance, {
			name: 'myDateTime',
			type: DataType.DATETIME,
		});
	});

	it('has a timestamp', () => {
		testDefinition(instance, {
			name: 'myTimestamp',
			type: DataType.TIMESTAMP,
		});
	});

	it('has a year', () => {
		testDefinition(instance, {
			name: 'myYear',
			type: DataType.YEAR,
			default: 1999,
		});
	});

	it('has a char', () => {
		testDefinition(instance, {
			name: 'myChar',
			type: DataType.CHAR,
			default: 'a',
		});
	});

	it('has a varchar', () => {
		testDefinition(instance, {
			name: 'myVarChar',
			type: DataType.VARCHAR,
			default: 'a',
			length: 10,
		});
	});

	it('has a tiny text', () => {
		testDefinition(instance, {
			name: 'myTinyText',
			type: DataType.TINYTEXT,
			default: 'a',
		});
	});

	it('has a text', () => {
		testDefinition(instance, {
			name: 'myText',
			type: DataType.TEXT,
			default: 'a',
		});
	});

	it('has a medium text', () => {
		testDefinition(instance, {
			name: 'myMediumText',
			type: DataType.MEDIUMTEXT,
			default: 'a',
		});
	});

	it('has a long text', () => {
		testDefinition(instance, {
			name: 'myLongText',
			type: DataType.LONGTEXT,
			default: 'a',
		});
	});

	it('has a binary', () => {
		testDefinition(instance, {
			name: 'myBinary',
			type: DataType.BINARY,
			default: 'a',
		});
	});

	it('has a var binary', () => {
		testDefinition(instance, {
			name: 'myVarBinary',
			type: DataType.VARBINARY,
			default: 'a',
			length: 10,
		});
	});

	it('has a tiny blob', () => {
		testDefinition(instance, {
			name: 'myTinyBlob',
			type: DataType.TINYBLOB,
			default: 'a',
		});
	});

	it('has a blob', () => {
		testDefinition(instance, {
			name: 'myBlob',
			type: DataType.BLOB,
			default: 'a',
		});
	});

	it('has a medium blob', () => {
		testDefinition(instance, {
			name: 'myMediumBlob',
			type: DataType.MEDIUMBLOB,
			default: 'a',
		});
	});

	it('has an enum', () => {
		testDefinition(instance, {
			name: 'myEnum',
			type: DataType.ENUM,
			default: 'a',
			enum: ['A', 'B'],
		});
	});

	it('has a set', () => {
		testDefinition(instance, {
			name: 'mySet',
			type: DataType.SET,
			default: ['a', 'b'],
			enum: ['A', 'B'],
		});
	});
});
