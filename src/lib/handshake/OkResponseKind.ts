// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export type OkResponseKind<T> = { "ok_kind": "simple" } | { "ok_kind": "redirected", "response": { to: string, } } | { "ok_kind": "data", "response": T };