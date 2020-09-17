import { join } from 'path'
import TestModule from '@/test-path'

const BASE_DIR = join(process.cwd(), 'packages')

interface Test {
  dir: string;
  dor: string[];
  test: string;
}

const test: Test = { dir: BASE_DIR, dor: ['this', 'is', 'test'], ...TestModule }

export default test;
