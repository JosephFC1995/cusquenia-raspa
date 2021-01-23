export default {
    ssr: false,

    target: 'static',

    head: {
        title: 'raspa-gana',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: ['@/assets/font/stylesheet.css'],

    plugins: [
        '~/plugins/vue-form',
        '~/plugins/vue-the-mask',
        // '~/plugins/vue-scratchable',
    ],

    components: true,

    buildModules: ['@nuxtjs/tailwindcss'],

    modules: ['@nuxtjs/axios'],

    axios: {},

    build: {},
}