/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { QueryApi } from "@fern-api/query";
import * as core from "../../../../core";

export const ApiKey: core.serialization.ObjectSchema<serializers.ApiKey.Raw, QueryApi.ApiKey> =
    core.serialization.object({
        user: core.serialization.lazyObject(async () => (await import("../../..")).User),
        name: core.serialization.string(),
        key: core.serialization.string(),
        lastUsed: core.serialization.property("last_used", core.serialization.number().optional()),
    });

export declare namespace ApiKey {
    interface Raw {
        user: serializers.User.Raw;
        name: string;
        key: string;
        last_used?: number | null;
    }
}