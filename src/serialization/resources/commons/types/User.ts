/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { QueryApi } from "@fern-api/query";
import * as core from "../../../../core";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, QueryApi.User> = core.serialization
    .object({
        name: core.serialization.string(),
        email: core.serialization.string(),
        avatar: core.serialization.string(),
        admin: core.serialization.boolean(),
        lastLogin: core.serialization.property("last_login", core.serialization.number().optional()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace User {
    interface Raw extends serializers.Resource.Raw {
        name: string;
        email: string;
        avatar: string;
        admin: boolean;
        last_login?: number | null;
    }
}
