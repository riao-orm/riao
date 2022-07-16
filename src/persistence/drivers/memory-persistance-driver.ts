import { DataModel } from '../../data-model';
import { PersistenceDriver } from '../interface';

type Id = number | string;
type Table = Record<Id, DataModel>;
type Database = Record<string, Table>

export class MemoryPersistenceDriver implements PersistenceDriver {
	protected storage: Database = {};
}
