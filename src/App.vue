<template>
    <main>
        <DarkmodeComponent />
        <router-view></router-view>
    </main>
</template>

<script>
    import { useStore } from './store';
    import DarkmodeComponent from './components/DarkmodeComponent.vue';

    export default {
        components: {
            DarkmodeComponent
        },

        mounted () {
            this.setTheme();
        },

        methods: {
            setTheme() {
                const currentTheme = useStore().getTheme;

                if (currentTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');

                    return;
                }
                
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
    }
</script>
