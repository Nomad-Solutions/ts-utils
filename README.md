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