<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <PersonalCardComponent />
            </div>
            <div class="col-lg-7">
                <SkillsComponent />
            </div>
            <div class="col-lg-12">
                <ProjectComponent />
            </div>
        </div>
    </div>
</template>

<script>
    import PersonalCardComponent from '@/components/PersonalCardComponent.vue';
    import SkillsComponent from '@/components/SkillsComponent.vue';
    import ProjectComponent from '@/components/ProjectComponent.vue';

    export default {
        components: {
            PersonalCardComponent,
            SkillsComponent,
            ProjectComponent,
        },
    };
</script>