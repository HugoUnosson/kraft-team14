import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
		  allow: [
			'static\\Chalmers_Logo.png',
			'static\\ludwig.png',
			'static\\herman.png',
			'static\\hugo.png'
		  ],
		},
	}
});
