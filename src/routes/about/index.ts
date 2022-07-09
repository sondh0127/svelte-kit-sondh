import { notion } from '$lib/notion';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request }) => {
  const response = await notion.blocks.children.list({ block_id: '00ba4d29ccc14a088de7a8b1c668e118' })


  return {
    body: {
      // retrieve a specific header
      userAgent: response
    }
  };
};
