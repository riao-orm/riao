import {
	BoolValue,
	Column,
	MultiBitValue,
	IntegerValue,
	SingleBitValue,
	DecimalValue,
	DateValue,
	TextValue,
	BinaryValue,
	BlobValue,
	EnumValue,
	SetValue,
} from '../../src/column';
import { DataModel } from '../../src/data-model';
import { DataType } from '../../src/data-type';
import 'jasmine';

export enum TestEnum {
	A = 'a',
	B = 'b',
}

export class AllColumnTypes extends DataModel {
	@Column({
		type: DataType.BOOL,
		default: false
	})
	public myBool: BoolValue = undefined;

	@Column({
		type: DataType.BIT,
		default: 0
	})
	public mySingleBit: SingleBitValue = undefined;

	@Column({
		type: DataType.BIT,
		default: [ 0, 1 ],
		length: 2,
	})
	public myMultiBit: MultiBitValue = undefined;

	@Column({
		type: DataType.TINYINT,
		default: 5,
	})
	public myTinyInt: IntegerValue = undefined;

	@Column({
		type: DataType.SMALLINT,
		default: 5,
	})
	public mySmallInt: IntegerValue = undefined;

	@Column({
		type: DataType.INT,
		default: 5,
	})
	public myInt: IntegerValue = undefined;

	@Column({
		type: DataType.BIGINT,
		default: 5
	})
	public myBigInt: IntegerValue = undefined;

	@Column({
		type: DataType.DECIMAL,
		significant: 12,
		decimal: 2,
		default: 10.32
	})
	public myDecimal: DecimalValue = undefined;

	@Column({
		type: DataType.FLOAT,
		default: 10.32
	})
	public myFloat: DecimalValue = undefined;

	@Column({
		type: DataType.DOUBLE,
		default: 10.32
	})
	public myDouble: DecimalValue = undefined;

	@Column({
		type: DataType.SMALLMONEY,
		default: 10.32
	})
	public mySmallMoney: DecimalValue = undefined;

	@Column({
		type: DataType.MONEY,
		default: 10.32
	})
	public myMoney: DecimalValue = undefined;

	@Column({
		type: DataType.DATE,
		default: new Date()
	})
	public myDate: DateValue = undefined;

	@Column({
		type: DataType.TIME,
		default: new Date()
	})
	public myTime: DateValue = undefined;

	@Column({
		type: DataType.DATETIME,
		default: new Date()
	})
	public myDateTime: DateValue = undefined;

	@Column({
		type: DataType.TIMESTAMP,
		default: new Date()
	})
	public myTimestamp: DateValue = undefined;

	@Column({
		type: DataType.YEAR,
		default: 1999
	})
	public myYear: IntegerValue = undefined;

	@Column({
		type: DataType.CHAR,
		default: 'a'
	})
	public myChar: TextValue = undefined;

	@Column({
		type: DataType.VARCHAR,
		default: 'a',
		length: 10
	})
	public myVarChar: TextValue = undefined;

	@Column({
		type: DataType.TINYTEXT,
		default: 'a'
	})
	public myTinyText: TextValue = undefined;

	@Column({
		type: DataType.TEXT,
		default: 'a'
	})
	public myText: TextValue = undefined;

	@Column({
		type: DataType.MEDIUMTEXT,
		default: 'a'
	})
	public myMediumText: TextValue = undefined;

	@Column({
		type: DataType.LONGTEXT,
		default: 'a'
	})
	public myLongText: TextValue = undefined;

	@Column({
		type: DataType.BINARY,
		default: 'a'
	})
	public myBinary: BinaryValue = undefined;

	@Column({
		type: DataType.VARBINARY,
		default: 'a',
		length: 10
	})
	public myVarBinary: BinaryValue = undefined;

	@Column({
		type: DataType.TINYBLOB,
		default: 'a'
	})
	public myTinyBlob: BlobValue = undefined;

	@Column({
		type: DataType.BLOB,
		default: 'a'
	})
	public myBlob: BlobValue = undefined;

	@Column({
		type: DataType.MEDIUMBLOB,
		default: 'a'
	})
	public myMediumBlob: BlobValue = undefined;

	@Column({
		type: DataType.ENUM,
		enum: Object.keys(TestEnum),
		default: TestEnum.A
	})
	public myEnum: EnumValue<TestEnum> = undefined;

	@Column({
		type: DataType.SET,
		enum: Object.keys(TestEnum),
		default: [ TestEnum.A, TestEnum.B ]
	})
	public mySet: SetValue<TestEnum> = undefined;
}
