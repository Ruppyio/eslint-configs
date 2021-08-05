'use strict';

const { sync: readPackageSync } = require('read-pkg');

module.exports = {
  extends: ['semantic-release-monorepo'],
  tagFormat: `${readPackageSync().name}@<%= version %>`,
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { breaking: true, release: 'major' },
          { revert: true, release: 'patch' },
          { type: 'feat', release: 'minor' },
          { type: 'feature', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'security', release: 'patch' },
        ],
        presetConfig: {
          types: [
            { type: 'feat', section: '✨ Features' },
            { type: 'feature', section: '✨ Features' },
            { type: 'fix', section: '🐛 Fixes' },
            { type: 'perf', section: '⚡ Performance Improvements' },
            { type: 'revert', section: '♻️ Reverts' },
            { type: 'docs', section: '📚 Documentations' },
            { type: 'security', section: '🔐 Security Patches' },
            { type: 'style', section: '🎨 Styles', hidden: true },
            { type: 'chore', section: '🧹 Miscellaneous Chores', hidden: true },
            { type: 'refactor', section: '🎯 Code Refactoring', hidden: true },
            { type: 'test', section: '🧪 Tests', hidden: true },
            { type: 'build', section: '🏗️ Build System', hidden: true },
            { type: 'ci', section: '🚚 Continuous Integration', hidden: true },
          ],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        writerOpts: {
          commitGroupsSort: (first, second) => {
            const commitGroupOrder = [
              '✨ Features',
              '🐛 Fixes',
              '🔐 Security Patches',
              '⚡ Performance Improvements',
              '♻️ Reverts',
              '📚 Documentations',
            ];
            const gRankA = commitGroupOrder.indexOf(first.title);
            const gRankB = commitGroupOrder.indexOf(second.title);

            if (gRankA <= gRankB) return -1;

            return 1;
          },
        },
        presetConfig: {
          types: [
            { type: 'feat', section: '✨ Features' },
            { type: 'feature', section: '✨ Features' },
            { type: 'fix', section: '🐛 Fixes' },
            { type: 'perf', section: '⚡ Performance Improvements' },
            { type: 'revert', section: '♻️ Reverts' },
            { type: 'docs', section: '📚 Documentations' },
            { type: 'security', section: '🔐 Security Patches' },
            { type: 'style', section: '🎨 Styles', hidden: true },
            { type: 'chore', section: '🧹 Miscellaneous Chores', hidden: true },
            { type: 'refactor', section: '🎯 Code Refactoring', hidden: true },
            { type: 'test', section: '🧪 Tests', hidden: true },
            { type: 'build', section: '🏗️ Build System', hidden: true },
            { type: 'ci', section: '🚚 Continuous Integration', hidden: true },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'changelog.md',
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project will be documented in this file.\n\nThis project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.\n\n',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message:
          'chore(release): publish <%= nextRelease.gitTag %> 📦🚀 [skip ci]\n\n<%= nextRelease.notes %>',
        assets: [
          'changelog.md',
          'package.json',
          'package-lock.json',
          'npm-shrinkwrap.json',
          'yarn.lock',
        ],
      },
    ],
    '@semantic-release/github',
  ],
};
