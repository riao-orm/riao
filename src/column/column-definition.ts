import { DataType } from '../data-type';
import { DataModel } from '../data-model';
import { getColumnOptions } from './column';

/**
 * Type for a boolean property
 */
export type BoolValue = boolean;

/**
 * Type for a single bit property
 */
export type SingleBitValue = 0 | 1;

/**
 * Type for a multi bit property
 */
export type MultiBitValue = (0 | 1)[];

/**
 * Type for a single/multi property
 */
export type BitValue = SingleBitValue | MultiBitValue;

/**
 * Type for a integer property
 */
export type IntegerValue = number;

/**
 * Type for a decimal/float property
 */
export type DecimalValue = number;

/**
 * Type for a date/time property
 */
export type DateValue = Date;

/**
 * Type for a text property
 */
export type TextValue = string;

/**
 * Type for a binary property
 */
export type BinaryValue = string;

/**
 * Type for a blob property
 */
export type BlobValue = string;

/**
 * Type for an enum property
 */
export type EnumValue<T = string> = T;

/**
 * Type for an enum set property
 */
export type SetValue<T = string> = T[];

/**
 * Type for a property
 */
export type ColumnValue =
	BoolValue |
	BitValue |
	IntegerValue |
	DecimalValue |
	DateValue |
	TextValue |
	BinaryValue |
	BlobValue |
	EnumValue |
	SetValue;

/**
 * Base interface for column options
 */
export interface BaseColumnOptions {
	dbName?: string;
	default?: ColumnValue;
	displayName?: string;
	isNullable?: boolean;
	type: DataType;
}

// -----------------------------------------------------------------------------
// Boolean type
// -----------------------------------------------------------------------------

/**
 * Bool column options
 */
export interface BoolColumnOptions extends BaseColumnOptions {
	default?: BoolValue;
	type: DataType.BOOL;
}

// -----------------------------------------------------------------------------
// Bit types
// -----------------------------------------------------------------------------

/**
 * Single bit column options
 */
export interface SingleBitColumnOptions extends BaseColumnOptions {
	default?: SingleBitValue;
	type: DataType.BIT;
}

/**
 * Multi bit column options
 */
export interface MultiBitColumnOptions extends BaseColumnOptions {
	default?: MultiBitValue;
	length?: number;
	type: DataType.BIT;
}

/**
 * Single/multi bit column options
 */
export type BitColumnOptions = SingleBitColumnOptions | MultiBitColumnOptions;

// -----------------------------------------------------------------------------
// Integer types
// -----------------------------------------------------------------------------

/**
 * Base class for integer column options
 */
export interface BaseIntColumnOptions extends BaseColumnOptions {
	default?: IntegerValue;
	autoIncrements?: boolean;
}

/**
 * Tiny int column options
 */
export interface TinyIntColumnOptions extends BaseIntColumnOptions {
	type: DataType.TINYINT;
}

/**
 * Small int column options
 */
export interface SmallIntColumnOptions extends BaseIntColumnOptions {
	type: DataType.SMALLINT;
}

/**
 * Int column options
 */
export interface IntColumnOptions extends BaseIntColumnOptions {
	type: DataType.INT;
}

/**
 * Big int column options
 */
export interface BigIntColumnOptions extends BaseIntColumnOptions {
	type: DataType.BIGINT;
}

// -----------------------------------------------------------------------------
// Decimal & Floating types
// -----------------------------------------------------------------------------

/**
 * Base interface for decimal types
 */
export interface BaseDecimalColumnOptions extends BaseColumnOptions {
	default?: DecimalValue;
}

/**
 * Decimal column options
 */
export interface DecimalColumnOptions extends BaseDecimalColumnOptions {
	significant: number;
	decimal: number;
	type: DataType.DECIMAL;
}

/**
 * Float column options
 */
export interface FloatColumnOptions extends BaseDecimalColumnOptions {
	type: DataType.FLOAT;
}

/**
 * Double column options
 */
export interface DoubleColumnOptions extends BaseDecimalColumnOptions {
	type: DataType.DOUBLE;
}

/**
 * Small money column options
 */
export interface SmallMoneyColumnOptions extends BaseDecimalColumnOptions {
	type: DataType.SMALLMONEY;
}

/**
 * Money column options
 */
export interface MoneyColumnOptions extends BaseDecimalColumnOptions {
	type: DataType.MONEY;
}

// -----------------------------------------------------------------------------
// Date & Time types
// -----------------------------------------------------------------------------

/**
 * Date column options
 */
export interface DateColumnOptions extends BaseColumnOptions {
	default?: DateValue;
	type: DataType.DATE;
}

/**
 * Time column options
 */
export interface TimeColumnOptions extends BaseColumnOptions {
	default?: DateValue;
	type: DataType.TIME;
}

/**
 * DateTime column options
 */
export interface DateTimeColumnOptions extends BaseColumnOptions {
	default?: DateValue;
	type: DataType.DATETIME;
}

/**
 * Timestamp column options
 */
export interface TimestampColumnOptions extends BaseColumnOptions {
	default?: DateValue;
	type: DataType.TIMESTAMP;
}

/**
 * Year column options
 */
export interface YearColumnOptions extends BaseColumnOptions {
	default?: IntegerValue;
	type: DataType.YEAR;
}

// -----------------------------------------------------------------------------
// Text types
// -----------------------------------------------------------------------------

/**
 * Base interface for text column options
 */
export interface BaseTextColumnOptions extends BaseColumnOptions {
	default?: TextValue;
}

/**
 * Char column options
 */
export interface CharColumnOptions extends BaseTextColumnOptions {
	type: DataType.CHAR;
}

/**
 * VarChar column options
 */
export interface VarCharColumnOptions extends BaseTextColumnOptions {
	length: number;
	type: DataType.VARCHAR;
}

/**
 * Tiny text column options
 */
export interface TinyTextColumnOptions extends BaseTextColumnOptions {
	type: DataType.TINYTEXT;
}

/**
 * Text column options
 */
export interface TextColumOptions extends BaseTextColumnOptions {
	type: DataType.TEXT;
}

/**
 * Medium text column options
 */
export interface MediumTextColumnOptions extends BaseTextColumnOptions {
	type: DataType.MEDIUMTEXT;
}

/**
 * Long text column options
 */
export interface LongTextColumnOptions extends BaseTextColumnOptions {
	type: DataType.LONGTEXT
}

// -----------------------------------------------------------------------------
// Binary types
// -----------------------------------------------------------------------------

/**
 * Base interface for binary column options
 */
export interface BaseBinaryColumnOptions extends BaseColumnOptions {
	default?: BinaryValue;
}

/**
 * Binary column options
 */
export interface BinaryColumnOptions extends BaseBinaryColumnOptions {
	type: DataType.BINARY;
}

/**
 * VarBinary column options
 */
export interface VarBinaryColumnOptions extends BaseBinaryColumnOptions {
	length: number;
	type: DataType.VARBINARY;
}

// -----------------------------------------------------------------------------
// Blob types
// -----------------------------------------------------------------------------

/**
 * Base interface for blob column options
 */
export interface BaseBlobColumnOptions extends BaseColumnOptions {
	default?: BlobValue;
}

/**
 * Tiny blob column options
 */
export interface TinyBlobColumnOptions extends BaseBlobColumnOptions {
	type: DataType.TINYBLOB;
}

/**
 * Blob column options
 */
export interface BlobColumnOptions extends BaseBlobColumnOptions {
	type: DataType.BLOB;
}

/**
 * Medium blob column options
 */
export interface MediumBlobColumnOptions extends BaseBlobColumnOptions {
	type: DataType.MEDIUMBLOB;
}

// -----------------------------------------------------------------------------
// Enum & Set types
// -----------------------------------------------------------------------------

/**
 * Base interface for enum column options
 */
export interface BaseEnumColumnOptions extends BaseColumnOptions {
	enum: string[];
}

/**
 * Enum column options
 */
export interface EnumColumnOptions extends BaseEnumColumnOptions {
	default?: string;
	type: DataType.ENUM;
}

/**
 * Set column options
 */
export interface SetColumnOptions extends BaseEnumColumnOptions {
	default?: string[];
	type: DataType.SET;
}

/**
 * Column options
 */
export type ColumnOptions =
	BoolColumnOptions |
	BitColumnOptions |
	TinyIntColumnOptions |
	SmallIntColumnOptions |
	IntColumnOptions |
	BigIntColumnOptions |
	DecimalColumnOptions |
	FloatColumnOptions |
	DoubleColumnOptions |
	SmallMoneyColumnOptions |
	MoneyColumnOptions |
	DateColumnOptions |
	TimeColumnOptions |
	DateTimeColumnOptions |
	TimestampColumnOptions |
	YearColumnOptions |
	CharColumnOptions |
	VarCharColumnOptions |
	TinyTextColumnOptions |
	TextColumOptions |
	MediumTextColumnOptions |
	LongTextColumnOptions |
	BinaryColumnOptions |
	VarBinaryColumnOptions |
	TinyBlobColumnOptions |
	BlobColumnOptions |
	MediumBlobColumnOptions |
	LongTextColumnOptions |
	BlobColumnOptions |
	MediumBlobColumnOptions |
	EnumColumnOptions |
	SetColumnOptions;

/**
 * A ColumnDefinition is the result of a compiled model key, val, and Column
 * 	decorator from a model property. This can be fed into query builder's
 * 	DDL methods.
 */
export type ColumnDefinition = ColumnOptions & { name: string };

/**
 * Get the column definition
 *
 * @param key Property name
 * @param target Target instance
 * @returns Returns the column definition
 */
export function getColumnDefinition(
	key: string,
	target: DataModel,
): ColumnDefinition {
	const defualtValue = target[key];
	const defaultMetadata: Partial<ColumnOptions> = {};

	if (defualtValue === null) {
		defaultMetadata.isNullable = true;
	}
	else if (defualtValue !== undefined) {
		defaultMetadata.default = defualtValue;
	}

	return Object.assign(
		defaultMetadata,
		getColumnOptions(key, target),
		{ name: key }
	);
}
