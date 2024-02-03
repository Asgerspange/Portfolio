<template>
        <div class="card mt-4 personal--container">
            <div class="card-header">
                <div class="row">
                    <div class="col-6">
                        <img src="@/img/pfp.png" alt="Vue.js 3 Cookbook" class="img-fluid personal--image" />
                    </div>
                    <div class="col-6">
                        <h5 class="card-title text--black">Asger Spange</h5>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <p class="card-text text--black">
                    I am a fullstack developer with a passion for creating functional web applications.
                    I have experience with a wide range of technologies, including Vue.js, Laravel, PHP, Python, C#, Node.js, MSSQL and MySQL.
                </p>
            </div>

            <div class="card-footer">
                <div class="row socials--container">
                    <div class="col-1">
                        <a href="https://www.github.com/asgerspange" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <div class="col-1">
                        <a href="https://www.linkedin.com/in/asger-spange-090320251/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-1">
                        <a href="https://www.twitter.com/asgerstoldt" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    @import "@/scss/variables.scss";
    .socials--container {
        font-size: 24px;
        
        .fa-github {
            color: $black-primary;
        }
    }

    .personal--image {
        border-radius: 5%;
    }

    .personal--container {
        height: 550px;
        max-height: 700px;
    }
</style>