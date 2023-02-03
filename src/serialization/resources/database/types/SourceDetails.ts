/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { QueryApi } from "@fern-api/query";
import * as core from "../../../../core";

export const SourceDetails: core.serialization.ObjectSchema<serializers.SourceDetails.Raw, QueryApi.SourceDetails> =
    core.serialization.object({
        databaseUrl: core.serialization.property("database_url", core.serialization.string().optional()),
        databaseUrlIv: core.serialization.property("database_url_iv", core.serialization.string().optional()),
        csvUrl: core.serialization.property("csv_url", core.serialization.string().optional()),
        csvId: core.serialization.property("csv_id", core.serialization.string().optional()),
        searchPath: core.serialization.property(
            "search_path",
            core.serialization.list(core.serialization.string()).optional()
        ),
    });

export declare namespace SourceDetails {
    interface Raw {
        database_url?: string | null;
        database_url_iv?: string | null;
        csv_url?: string | null;
        csv_id?: string | null;
        search_path?: string[] | null;
    }
}