# Instructions

## General

In all interactions and commit messages, be extremely concise and sacrifice on grammar for the sake of concision

## File Naming & Structure

- Each file starts with a block comment containing the full problem description. Format comment as block comment. Never modify text content of the comment. Format for example

```ts
/*
 * this is a comment
 */
```

- Create and initialize test file to `/test` and mirror source file names (e.g., `test/41_itinerary.test.ts`)

## Code Style & Conventions

- Prefer immutability, functionality and arrow functions
- Use `camelCase` for variable naming, `UPPER_SNAKE_CASE` for constants that are truly constant
- Prefer array methods (map, filter, reduce) over loops
- Prefer readonly arrays and object properties where applicable

## Utility Functions

The `util/collection-utils.ts` module provides functional reusable helpers:

- **When solving problems involving collections**, check this module before reimplementing utilities

## Testing

- **Test framework**: Vitest
- Test files in `test/` directory mirror source file names (e.g., `test/41_itinerary.test.ts`)
- Run tests: `npm test`
- Test structure uses `describe()` and `it()` blocks
- First describe block should be callable function name
- Group `it` blocks in describe blocks when applicable
- `it` descriptions follow "should" format for clarity

## Running Code

- **Execute TypeScript directly**: `npm run execute <filename>` (uses tsx)

## When Creating New Solutions

1. Name file as `{number}_{descriptive_name}.ts`
2. Start with problem description in block comment
3. Use modern TypeScript with explicit types, follow strict mode
4. Export main function(s) for testability
5. Add test file in `test/` directory
6. Check `util/collection-utils.ts` for reusable helpers
7. Keep solutions self-contained - problem, solution, and tests should be easily understood together

## When transforming/converting old solutions

- Refer to `When Creating New Solutions` and apply same rules

## Implementation Patterns

- Follow instructions given in comment block
- Favor functional programming over mutating state but don't sacrifice readability
