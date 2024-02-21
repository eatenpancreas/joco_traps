
// This file was generated by [papi]. Do not edit this file manually.
	import user from '$lib/http/user';
	import { get as getStore } from 'svelte/store';
	
import { type Response, request_inner } from '$lib/http/response';
const method = 'delete'; 
const host = import.meta.env.VITE_API_URL?? ''; 
import type { __Endpoint_delete_user as DELETE } from '$lib/endpoint_defines//users/{username}/DELETE'; 
export default async function del(in_val: DELETE['in_type'], username: string,query?: DELETE['query_type']): Promise<Response<DELETE['out_data_type']>> {
  const params = new URLSearchParams();
  for (const key in query) {
    params.set(key, query[key]);
  }
	const request_init: RequestInit = {
    credentials: 'include',
		method: method,
		headers: {
        'Authorization-User': getStore(user)?.username,
		},
	}
  const path = '/users/' + username + ''

	return request_inner(host, path, params, request_init);
}
  