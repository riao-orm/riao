import 'jasmine';
import { DataType } from '../../../src/data-type';

describe('Data Types', () => {
	it('has a boolean type', () => {
		expect(DataType.BOOL).toEqual('BOOL');
	});

	it('has a bit type', () => {
		expect(DataType.BIT).toEqual('BIT');
	});

	it('has a tiny int type', () => {
		expect(DataType.TINYINT).toEqual('TINYINT');
	});

	it('has a small int type', () => {
		expect(DataType.SMALLINT).toEqual('SMALLINT');
	});

	it('has an int type', () => {
		expect(DataType.INT).toEqual('INT');
	});

	it('has a big int type', () => {
		expect(DataType.BIGINT).toEqual('BIGINT');
	});

	it('has a decimal type', () => {
		expect(DataType.DECIMAL).toEqual('DECIMAL');
	});

	it('has a float type', () => {
		expect(DataType.FLOAT).toEqual('FLOAT');
	});

	it('has a double type', () => {
		expect(DataType.DOUBLE).toEqual('DOUBLE');
	});

	it('has a small money type', () => {
		expect(DataType.SMALLMONEY).toEqual('SMALLMONEY');
	});

	it('has a money type', () => {
		expect(DataType.MONEY).toEqual('MONEY');
	});

	it('has a date type', () => {
		expect(DataType.DATE).toEqual('DATE');
	});

	it('has a time type', () => {
		expect(DataType.TIME).toEqual('TIME');
	});

	it('has a date time type', () => {
		expect(DataType.DATETIME).toEqual('DATETIME');
	});

	it('has a timestamp type', () => {
		expect(DataType.TIMESTAMP).toEqual('TIMESTAMP');
	});

	it('has a year type', () => {
		expect(DataType.YEAR).toEqual('YEAR');
	});

	it('has a char type', () => {
		expect(DataType.CHAR).toEqual('CHAR');
	});

	it('has a varchar type', () => {
		expect(DataType.VARCHAR).toEqual('VARCHAR');
	});

	it('has a tiny text type', () => {
		expect(DataType.TINYTEXT).toEqual('TINYTEXT');
	});

	it('has a text type', () => {
		expect(DataType.TEXT).toEqual('TEXT');
	});

	it('has a medium text type', () => {
		expect(DataType.MEDIUMTEXT).toEqual('MEDIUMTEXT');
	});

	it('has a long text type', () => {
		expect(DataType.LONGTEXT).toEqual('LONGTEXT');
	});

	it('has a binary type', () => {
		expect(DataType.BINARY).toEqual('BINARY');
	});

	it('has a varbinary type', () => {
		expect(DataType.VARBINARY).toEqual('VARBINARY');
	});

	it('has a tiny blob type', () => {
		expect(DataType.TINYBLOB).toEqual('TINYBLOB');
	});

	it('has a blob type', () => {
		expect(DataType.BLOB).toEqual('BLOB');
	});

	it('has a medium blob type', () => {
		expect(DataType.MEDIUMBLOB).toEqual('MEDIUMBLOB');
	});

	it('has an enum type', () => {
		expect(DataType.ENUM).toEqual('ENUM');
	});

	it('has a set type', () => {
		expect(DataType.SET).toEqual('SET');
	});
});
