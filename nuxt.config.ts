// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,

	// typescripts
	typescript: {
		strict: true,
		typeCheck: true,
	},

	modules: [
		'@pinia/nuxt',
	],
})
