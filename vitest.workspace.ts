import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'apps/*',
  {
    test: {
      coverage: {
        include: [
          'packages/**/*.[jt]s',
        ],
        provider: 'v8',
        reporter: ['text-summary', 'json-summary', 'json'],
      },
  
      include: [
        'packages/**/*.test.[jt]s',
      ],
  
      reporters: ['verbose', 'github-actions'],
  
      sequence: {
        concurrent: true,
      },
    },
  }
])