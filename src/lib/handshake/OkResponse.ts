// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Error } from "./Error";
import type { OkResponseKind } from "./OkResponseKind";

export interface OkResponse<T> { message: string, errors: Array<Error>, ok: OkResponseKind<T>, }