
// This file was generated by [papi]. Do not edit this file manually.
	import user from '$lib/http/user';
	import { get as getStore } from 'svelte/store';
	
import { type Response, request_inner } from '$lib/http/response';
const method = 'post'; 
const host = import.meta.env.VITE_API_URL?? ''; 
import type { __Endpoint_register as POST } from '$lib/endpoint_defines//auth/register/POST'; 
export default async function post(in_val: POST['in_type'],query?: POST['query_type']): Promise<Response<POST['out_data_type']>> {
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
  const path = '/auth/register'

  request_init.body = JSON.stringify(in_val);
  request_init.headers = {
    'Content-Type': 'application/json',
  }
    
	return request_inner(host, path, params, request_init);
}
  