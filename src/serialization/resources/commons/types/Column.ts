/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { QueryApi } from "@fern-api/query";
import * as core from "../../../../core";

export const Column: core.serialization.ObjectSchema<serializers.Column.Raw, QueryApi.Column> =
    core.serialization.object({
        dataType: core.serialization.property("data_type", core.serialization.string().optional()),
        isPrimaryKey: core.serialization.property("is_primary_key", core.serialization.boolean().optional()),
        isForeignKey: core.serialization.property("is_foreign_key", core.serialization.boolean().optional()),
        referencedTable: core.serialization.property("referenced_table", core.serialization.string().optional()),
        referencedField: core.serialization.property("referenced_field", core.serialization.string().optional()),
        hashed: core.serialization.boolean().optional(),
        excluded: core.serialization.boolean().optional(),
        enum: core.serialization.list(core.serialization.unknown()).optional(),
    });

export declare namespace Column {
    interface Raw {
        data_type?: string | null;
        is_primary_key?: boolean | null;
        is_foreign_key?: boolean | null;
        referenced_table?: string | null;
        referenced_field?: string | null;
        hashed?: boolean | null;
        excluded?: boolean | null;
        enum?: unknown[] | null;
    }
}
