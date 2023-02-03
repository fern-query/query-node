/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import { QueryApi } from "@fern-api/query";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as core from "../../../../core";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment: environments.QueryApiEnvironment | string;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    public async create(request: QueryApi.CreateApiKeyRequest): Promise<QueryApi.ApiKey> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/ajax/apikeys"),
            method: "POST",
            body: await serializers.CreateApiKeyRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.ApiKey.parse(_response.body as serializers.ApiKey.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.QueryApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.QueryApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.QueryApiTimeoutError();
            case "unknown":
                throw new errors.QueryApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async list(request: QueryApi.ListAllApiKeysRequest = {}): Promise<QueryApi.ApiKeysPage> {
        const { limit, page, sort, expand } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (sort != null) {
            _queryParams.append("sort", sort.toString());
        }

        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/ajax/apikeys"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ApiKeysPage.parse(_response.body as serializers.ApiKeysPage.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.QueryApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.QueryApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.QueryApiTimeoutError();
            case "unknown":
                throw new errors.QueryApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {QueryApi.NotFoundError}
     */
    public async update(apiKeyId: string, request: QueryApi.UpdateApiKeyRequest): Promise<QueryApi.ApiKey> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/ajax/apikeys/${apiKeyId}`),
            method: "PATCH",
            body: await serializers.UpdateApiKeyRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.ApiKey.parse(_response.body as serializers.ApiKey.Raw);
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new QueryApi.NotFoundError();
                default:
                    throw new errors.QueryApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.QueryApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.QueryApiTimeoutError();
            case "unknown":
                throw new errors.QueryApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {QueryApi.NotFoundError}
     */
    public async roll(apiKeyId: string): Promise<QueryApi.ApiKey> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/ajax/apikeys/${apiKeyId}`),
            method: "POST",
        });
        if (_response.ok) {
            return await serializers.ApiKey.parse(_response.body as serializers.ApiKey.Raw);
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new QueryApi.NotFoundError();
                default:
                    throw new errors.QueryApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.QueryApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.QueryApiTimeoutError();
            case "unknown":
                throw new errors.QueryApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {QueryApi.NotFoundError}
     */
    public async delete(apiKeyId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/ajax/apikeys/${apiKeyId}`),
            method: "DELETE",
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new QueryApi.NotFoundError();
                default:
                    throw new errors.QueryApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.QueryApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.QueryApiTimeoutError();
            case "unknown":
                throw new errors.QueryApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
