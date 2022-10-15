import { DataModel } from 'data-model';
import { ColumnDefinition, getColumnDefinition } from '../../../src/column';
import { DataType } from '../../../src/data-type';

export interface ExpectedDefinition {
	name: string;
	type: DataType;
	default?: unknown;
	length?: unknown;
	significant?: unknown;
	decimal?: unknown;
	enum?: string[];
}

/**
 * Test a column definition
 *
 * @param instance Class/model instance
 * @param expected Expected definition options
 * @returns Returns loaded definition
 */
export function testDefinition(
	instance: DataModel,
	expected: ExpectedDefinition
): ColumnDefinition {
	const actual = getColumnDefinition(expected.name, instance);

	for (const key in expected) {
		expect(actual[key]).withContext(key).toEqual(expected[key]);
	}

	return actual;
}
