import 'reflect-metadata';
import { ColumnOptions } from './column-definition';
import { DataModel } from '../data-model';

const columnKey = Symbol('Column');

/**
 * Register a class/model property as a column, and set column options
 *
 * @param options Column options. Varies per column type
 * @return Unused
 */
export function Column(options: ColumnOptions) {
	return Reflect.metadata(columnKey, options);
}

/**
 * Get column options for a property
 *
 * @param key Property name
 * @param target Class/model instance
 * @returns Returns column options
 */
export function getColumnOptions(
	key: string,
	target: DataModel
): ColumnOptions {
	return Reflect.getMetadata(columnKey, target, key);
}
