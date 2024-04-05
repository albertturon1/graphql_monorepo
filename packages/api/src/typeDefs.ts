import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';

//@ts-ignore
const __filename = fileURLToPath(import.meta.url);

const parentDir = path.resolve(path.dirname(__filename), '..')

const schemaPath = `${parentDir}/schema.gql`

export const typeDefs = fs.readFileSync(schemaPath, 'utf-8')