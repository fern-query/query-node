/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { QueryApi } from "@fern-api/query";
import * as core from "../../../../core";

export const Query: core.serialization.ObjectSchema<serializers.Query.Raw, QueryApi.Query> = core.serialization
    .object({
        user: core.serialization.lazyObject(async () => (await import("../../..")).User),
        name: core.serialization.string().optional(),
        status: core.serialization.lazy(async () => (await import("../../..")).QueryStatus),
        lastError: core.serialization.property("last_error", core.serialization.string().optional()),
        question: core.serialization.string(),
        database: core.serialization.lazyObject(async () => (await import("../../..")).Database),
        config: core.serialization.lazyObject(async () => (await import("../../..")).NumenorConfig),
        code: core.serialization.string(),
        result: core.serialization.lazyObject(async () => (await import("../../..")).Result),
        parentQuery: core.serialization.property("parent_query", core.serialization.string()),
        relevantQuestion: core.serialization.property(
            "relevant_question",
            core.serialization.list(core.serialization.string())
        ),
        run: core.serialization.boolean(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace Query {
    interface Raw extends serializers.Resource.Raw {
        user: serializers.User.Raw;
        name?: string | null;
        status: serializers.QueryStatus.Raw;
        last_error?: string | null;
        question: string;
        database: serializers.Database.Raw;
        config: serializers.NumenorConfig.Raw;
        code: string;
        result: serializers.Result.Raw;
        parent_query: string;
        relevant_question: string[];
        run: boolean;
    }
}