<template>
    <div class="card mt-4 skills--container">
        <div class="card-header">
            <h5 class="card-title text--black">Skills</h5>
        </div>
        <div class="card-body">
            <table class="text--black">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Understanding</th>
                        <th>Specifications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="skill in skills">
                        <td>{{ skill.name }}</td>
                        <td>{{ skill.understanding }}</td>
                        <td>{{ skill.specifications }}</td>
                    </tr>
                </tbody>

            </table>
        </div>
            
    </div>
</template>

<script>
    export default {
        data () {
            return {
                skills: [
                    { name: 'Vue.js', understanding: 'Intermediate', specifications: 'Vue 2, Vue 3, Vuex, Vue Router, Pinia' },
                    { name: 'Laravel', understanding: 'Intermediate', specifications: 'Laravel 8, Laravel 10, Eloquent, Blade' },
                    { name: 'PHP', understanding: 'Intermediate', specifications: 'PHP 7, PHP 8, Composer' },
                    { name: 'Javascript', understanding: 'Intermediate', specifications: 'ES8' },
                    { name: 'Python', understanding: 'Advanced Beginner', specifications: 'Flask, Python 3, Pandas' },
                    { name: 'C#', understanding: 'Beginner', specifications: '.NET' },
                    { name: 'Node.js', understanding: 'Advanced Beginner', specifications: 'Mongoose, NPM' },
                    { name: 'MSSQL', understanding: 'Expert', specifications: 'T-SQL, SSMS, SQL Server' },
                    { name: 'MySQL', understanding: 'Advanced Intermediate', specifications: 'SQL, MySQL Workbench' },
                ],
            };
        },
    }
</script>