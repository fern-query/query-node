/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { QueryApi } from "@fern-api/query";
import * as core from "../../../../../core";

export const CreateQueryRequest: core.serialization.Schema<
    serializers.CreateQueryRequest.Raw,
    QueryApi.CreateQueryRequest
> = core.serialization.object({
    question: core.serialization.string(),
    database: core.serialization.string(),
});

export declare namespace CreateQueryRequest {
    interface Raw {
        question: string;
        database: string;
    }
}