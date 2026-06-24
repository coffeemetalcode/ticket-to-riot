#!/usr/bin/env node

/*
 * Generate a random UUID (v4) or a specified number of UUIDs.
 * Usage: node uuid.mjs [count]
 */
import { randomUUID } from 'node:crypto';

const count = parseInt(process.argv[2]) || 1;
for (let i = 0; i < count; i++) {
  console.log(randomUUID());
}
