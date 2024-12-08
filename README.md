# Nomad Solutions Typescript Utility Library

This library contains both utility functions and utility types.

## Install
Add this repository as a dependency in your `package.json`:

```json
// package.json
{
	"dependencies": {
		"@nomad-solutions/ts-utils": "github:Nomad-Solutions/ts-utils#v1.0.0", // specific tag (recommended)
		"@nomad-solutions/ts-utils": "github:Nomad-Solutions/ts-utils" // latest commit
	}
}
```

## Usage
After installation, you can import any utility with as such:

```typescript
import { createShutdownHandler } from '@nomad-solutions/ts-utils';
import type { MergeArrayOfObjects } from '@nomad-solutions/ts-utils';
```

## Utilities
Go digging in the source code in `./lib/`. All utilites should be documented in the code.

## Development

### Developing with other application
When developing on this package, it might be beneficial to see how changes interact with your source code in your application. To do this, you can use [bun link](https://bun.sh/docs/cli/link).

**TLDR**:
1. Execute `bun link` from the root of this repository.
2. Execute `bun link @nomad-solutions/errors` in the root of your application.

This package should now be usable in your application (see [Usage section](#usage)), and updates to this package will be reflected instantly in your application (by the magic of symlinks).

> [!IMPORTANT]  
> This will not add the dependency to your `package.json`, so you will need to [install](#install) this package manually if you wish to do use it.
