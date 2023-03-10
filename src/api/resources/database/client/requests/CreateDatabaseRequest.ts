/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { QueryApi } from "@fern-api/query";

export interface CreateDatabaseRequest {
    name: string;
    tables: Record<string, QueryApi.Table>;
    public: boolean;
    sourceDetails?: QueryApi.SourceDetails;
    source: string;
}
