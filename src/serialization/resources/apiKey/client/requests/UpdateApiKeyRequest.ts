/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { QueryApi } from "@fern-api/query";
import * as core from "../../../../../core";

export const UpdateApiKeyRequest: core.serialization.Schema<
    serializers.UpdateApiKeyRequest.Raw,
    QueryApi.UpdateApiKeyRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace UpdateApiKeyRequest {
    interface Raw {
        name: string;
    }
}