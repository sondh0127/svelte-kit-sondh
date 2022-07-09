import { Client } from "@notionhq/client"

const NOTION_KEY = import.meta.env.VITE_NOTION_KEY
console.log('[LOG] ~ file: notion.ts ~ line 4 ~ NOTION_KEY', NOTION_KEY)
const NOTION_DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID


// Notion client
export const notion = new Client({
  auth: NOTION_KEY,
})
