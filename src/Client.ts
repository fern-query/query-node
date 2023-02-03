/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import { Client as ApiKeyClient } from "./api/resources/apiKey/client/Client";
import { Client as AuthClient } from "./api/resources/auth/client/Client";
import { Client as DatabaseClient } from "./api/resources/database/client/Client";
import { Client as QueryClient } from "./api/resources/query/client/Client";

export declare namespace QueryApiClient {
    interface Options {
        environment: environments.QueryApiEnvironment | string;
    }
}

export class QueryApiClient {
    constructor(private readonly options: QueryApiClient.Options) {}

    #apiKey: ApiKeyClient | undefined;

    public get apiKey(): ApiKeyClient {
        return (this.#apiKey ??= new ApiKeyClient(this.options));
    }

    #auth: AuthClient | undefined;

    public get auth(): AuthClient {
        return (this.#auth ??= new AuthClient(this.options));
    }

    #database: DatabaseClient | undefined;

    public get database(): DatabaseClient {
        return (this.#database ??= new DatabaseClient(this.options));
    }

    #query: QueryClient | undefined;

    public get query(): QueryClient {
        return (this.#query ??= new QueryClient(this.options));
    }
}