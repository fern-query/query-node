/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.auth.getUser.Response.Raw, string> =
    core.serialization.string();

export declare namespace Response {
    type Raw = string;
}
