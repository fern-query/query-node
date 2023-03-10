/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as DatabaseClient } from "./api/resources/database/client/Client";
import { Client as QueryClient } from "./api/resources/query/client/Client";

export declare namespace QueryApiClient {
    interface Options {
        environment?: environments.QueryApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class QueryApiClient {
    constructor(private readonly options: QueryApiClient.Options) {}

    #database: DatabaseClient | undefined;

    public get database(): DatabaseClient {
        return (this.#database ??= new DatabaseClient(this.options));
    }

    #query: QueryClient | undefined;

    public get query(): QueryClient {
        return (this.#query ??= new QueryClient(this.options));
    }
}
