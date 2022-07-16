export interface BasicAuth {
	username: string;
	password: string;
}

export type ConnectionString = string;
export interface ConnectionOptionsObject {
	host: string;
	port?: number;
	credentials: BasicAuth;
}

export type ConnectionOptions =
	ConnectionString |
	ConnectionOptionsObject;

export abstract class Connection {
	protected conn: any;
	protected connectionOptions: ConnectionOptions;

	public async connect(options: ConnectionOptions): Promise<void> {
		this.connectionOptions = options;
	}

	public async disconnect(): Promise<void> {
		this.conn = undefined;
	}
}
