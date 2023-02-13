<template>
    <header class="profile container">
        <i class="ri-moon-line change-theme" id="theme-btn" @click="toggleTheme"></i>
        <div class="profile-wrap grid">
            <div class="content">
                <div class="border">
                    <div class="portrait">
                        <img src="@/assets/images/Portrait.png" alt="個人照" />
                    </div>
                </div>

                <h2 class="name">熊伯祥 Oliver ✋🏻</h2>
                <h3 class="job">前端工程師 Frontend Developer</h3>

                <ul class="link-wrap">
                    <li class="link linkedin">
                        <a href="https://www.linkedin.com/in/%E7%86%8A%E4%BC%AF%E7%A5%A5/" target="_blank">
                            <i class="ri-linkedin-box-fill"></i>
                        </a>
                    </li>
                    <li class="link cakeresume">
                        <a href="https://www.cakeresume.com/dashboard?ref=navs_dashboard" target="_blank">
                            <i class="ri-copyright-fill"></i>
                        </a>
                    </li>
                    <li class="link github">
                        <a href="https://github.com/bear320" target="_blank">
                            <i class="ri-github-fill"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="info-wrap grid">
                <div class="info">
                    <h3 class="number">2</h3>
                    <p class="desc">Years of<br />work</p>
                </div>
                <div class="info">
                    <h3 class="number">+2</h3>
                    <p class="desc">Completed<br />projects</p>
                </div>
                <div class="info">
                    <h3 class="number">96</h3>
                    <p class="desc">Satisfied<br />customers</p>
                </div>
            </div>

            <div class="btn-wrap">
                <a download="" href="@/assets/CV/OliverXiong_CV.pdf" class="btn">
                    下載履歷
                    <i class="ri-download-line"></i>
                </a>
                <div class="small-btn-wrap">
                    <a href="tel:+886-960779920" class="btn btn-small btn-gray">
                        <i class="ri-phone-line"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-small btn-gray">
                        <i class="ri-mail-line"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <main class="main">
        <section class="filter-wrap container">
            <div class="content">
                <router-link to="/">關於我</router-link>
                <router-link to="/projects">作品集</router-link>
                <router-link to="/skills">技能</router-link>
            </div>
            <router-view></router-view>
        </section>
    </main>

    <footer class="footer container">
        <span class="copy-right"> &#169; Oliver Xiong. All rights reserved. </span>
    </footer>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        toggleTheme() {
            const themeButton = document.getElementById("theme-btn");

            // Get selected theme and icon in localstorage (if so)
            const selectedTheme = localStorage.getItem("selected-theme");
            const selectedIcon = localStorage.getItem("selected-icon");

            // Get current theme and icon
            const getCurrentTheme = () => (document.body.classList.contains("dark-theme") ? "dark" : "light");
            const getCurrentIcon = () =>
                themeButton.classList.contains("ri-sun-line") ? "ri-moon-line" : "ri-sun-line";

            // Check if the visitor previously chose a topic
            if (selectedTheme) {
                document.body.classList[selectedTheme === "dark" ? "add" : "remove"]("dark-theme");
                themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"]("ri-sun-line");
            }

            // Toggle theme and icon
            document.body.classList.toggle("dark-theme");
            themeButton.classList.toggle("ri-sun-line");

            // Change theme and icon, then write into localstorage
            localStorage.setItem("selected-theme", getCurrentTheme());
            localStorage.setItem("selected-icon", getCurrentIcon());
        },
    },
};
</script>

<style lang="scss">
.profile {
    position: relative;
    padding-top: 3.5rem;

    @include min(992) {
        padding-top: 4rem;
    }

    .profile-wrap {
        row-gap: 2rem;

        .content {
            display: grid;
            text-align: center;

            .border {
                border: 3.5px solid var(--first-color);
                justify-self: center;
                width: 115px;
                height: 115px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                margin-bottom: 0.75rem;

                @include min(992) {
                    width: 135px;
                    height: 135px;
                    margin-bottom: 1rem;
                }

                .portrait {
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(
                        180deg,
                        hsla(var(--hue), var(--sat), var(--lig), 1) 0%,
                        hsla(var(--hue), var(--sat), var(--lig), 0.2) 100%
                    );
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;

                    @include min(992) {
                        width: 120px;
                        height: 120px;
                    }

                    img {
                        width: 75px;

                        @include min(992) {
                            width: 90px;
                        }
                    }
                }
            }

            .name {
                font-size: var(--h2-font-size);
            }

            .job {
                font-size: var(--smaller-font-size);
                font-weight: 500;
                color: var(--text-color);
                margin-bottom: 1rem;

                @include min(992) {
                    margin-bottom: 1.5rem;
                }
            }

            .link-wrap {
                display: flex;
                justify-content: center;
                column-gap: 0.75rem;

                .link a {
                    font-size: 1.25rem;
                    color: var(--text-color);
                    transition: 0.3s;

                    &:hover {
                        color: var(--first-color);
                    }
                }
            }
        }

        .info-wrap {
            grid-template-columns: repeat(3, max-content);
            justify-content: center;
            column-gap: 2.5rem;

            @include max(320) {
                column-gap: 1.5rem;
            }

            @include min(992) {
                column-gap: 3rem;
            }

            .info {
                text-align: center;

                .number {
                    font-size: var(--normal-font-size);
                    margin-bottom: 0.25rem;
                }

                .desc {
                    font-size: var(--smaller-font-size);
                    font-weight: 500;

                    @include min(992) {
                        font-size: var(--small-font-size);
                    }
                }
            }
        }

        .btn-wrap,
        .small-btn-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .btn-wrap {
            column-gap: 1rem;

            @include max(320) {
                flex-direction: column;
                row-gap: 1rem;
            }

            @include min(992) {
                column-gap: 2rem;
            }

            .small-btn-wrap {
                column-gap: 0.25rem;

                .btn-gray {
                    background-color: var(--text-color-lighten);
                    color: var(--title-color);

                    &:hover {
                        background-color: var(--text-color-light);
                    }
                }
            }
        }
    }
}

.main {
    .filter-wrap {
        .content {
            margin: 2rem 0 2.5rem;
            background-color: var(--text-color-lighten);
            padding: 0.375rem;
            border-radius: 0.75rem;
            display: flex;
            justify-content: space-between;
            column-gap: 0.5rem;

            @include min(576) {
                width: 332px;
                margin: 3rem auto;
            }

            a {
                width: 100%;
                height: 100%;
                padding: 1rem;
                text-align: center;
                font-size: var(--small-font-size);
                font-family: var(--body-font);
                font-weight: 500;
                border-radius: 0.75rem;
                color: var(--title-color);
                background-color: transparent;
                cursor: pointer;
                transition: 0.3s;

                &:hover,
                &.router-link-exact-active {
                    background-color: var(--body-color);
                }
            }
        }
    }
}

.footer {
    .copy-right {
        display: block;
        margin: 2.5rem 0 2rem;
        text-align: center;
        font-size: var(--smaller-font-size);
        color: var(--text-color-light);

        @include min(992) {
            margin: 4.5rem 0 2.5rem;
        }
    }
}

// Scroll Bar
::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 0.5rem;
    background-color: hsl(var(--hue), 8%, 66%);
}

::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: hsl(var(--hue), 8%, 54%);
}

::-webkit-scrollbar-thumb:hover {
    background-color: hsl(var(--hue), 8%, 44%);
}
</style>
