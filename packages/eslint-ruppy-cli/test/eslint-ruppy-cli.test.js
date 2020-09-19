'use strict';

const { stdin } = require('mock-stdin');
const { askQuestions } = require('..');

// Key codes
const keys = {
  up: '\x1B\x5B\x41',
  down: '\x1B\x5B\x42',
  enter: '\x0D',
  space: '\x20',
};

// helper function for timing
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mock stdin so we can send messages to the CLI
 * @type {import('mock-stdin').MockSTDIN} io
 */
let io = null;

beforeAll(() => {
  io = stdin();
  return io;
});

afterAll(() => io.restore());

describe('eslint-ruppy-cli', () => {
  it('should have expected result', async () => {
    const sendKeystrokes = async () => {
      // projType
      io.send(keys.down);
      io.send(keys.up);
      io.send(keys.enter);
      await delay(10);

      // further projType
      io.send(keys.down);
      io.send(keys.up);
      io.send(keys.enter);
      await delay(10);

      // env
      io.send(keys.down);
      io.send(keys.space);
      io.send(keys.down);
      io.send(keys.space);
      io.send(keys.space);
      io.send(keys.enter);
      await delay(10);

      // ts
      io.send(keys.enter);
      await delay(10);

      // manager
      io.send(keys.down);
      io.send(keys.up);
      io.send(keys.enter);
      await delay(10);
    };

    // fire-off keystrokes after 5ms so the prompt showup first
    setTimeout(async () => sendKeystrokes(), 5);

    const result = await askQuestions();

    expect(result).toEqual({
      type: 'esm',
      env: ['browser', 'jest'],
      typescript: true,
      manager: 'yarn',
    });
  });
});
