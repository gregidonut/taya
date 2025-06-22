import type { Client, Transaction } from '@libsql/client';

export type SelectPostsResult = {
	id: string;
	user_id: string;
	body: string;
	date?: string;
}

export async function selectPosts(client: Client | Transaction): Promise<SelectPostsResult[]> {
	const sql = `
	select * from Posts;
	
	`
	return client.execute(sql)
		.then(res => res.rows)
		.then(rows => rows.map(row => mapArrayToSelectPostsResult(row)));
}

function mapArrayToSelectPostsResult(data: any) {
	const result: SelectPostsResult = {
		id: data[0],
		user_id: data[1],
		body: data[2],
		date: data[3]
	}
	return result;
}