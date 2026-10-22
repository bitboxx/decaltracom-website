import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				wrangler: { configPath: './wrangler.jsonc' },
				// The secrets the tests stand in for; production gets them from `wrangler secret put`.
				miniflare: { bindings: { DECALTRACOM_GRAPH_TENANT: 'tenant', DECALTRACOM_GRAPH_CLIENT_ID: 'client', DECALTRACOM_GRAPH_CLIENT_SECRET: 'secret' } },
			},
		},
	},
});
