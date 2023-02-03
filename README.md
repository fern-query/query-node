# Query Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/query)](https://www.npmjs.com/package/@fern-api/query)

The Query Node.js library provides access to the Query API from JavaScript/TypeScript.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/query-typescript-example?file=app.ts&view=editor)

```typescript
import { QueryApiClient } from '@fern-api/query';

const client = new QueryApiClient({
  token: "MY_TOKEN",
});

const response = await client.query.create({
  database: 'my-database-id',
  question: 'How many people live in New York City?',
});

console.log('Received response from Query!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-query/query-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
