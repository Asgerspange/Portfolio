<template>
    <div class="button-container">
        <ToggleButton class="material-symbols-outlined" v-model="themeToggle" onLabel="Dark" offLabel="Light" @change="changeTheme"/>
    </div>
</template>

<script>
import { useStore } from '../store';

export default {
    data() {
        return {
            themeToggle: true,
        };
    },

    computed: {
        theme() {
            return useStore().getTheme;
        },
    },

    methods: {
        changeTheme() {
            const currentTheme = useStore().getTheme;

            if (currentTheme === 'light') {
                useStore().setTheme('dark');
                console.log(useStore().getTheme);
                document.documentElement.setAttribute('data-theme', 'dark');

                return;
            }
            
            useStore().setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        },
    },
};
</script>

<style scoped>
.button-container {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 1000;
}
</style>