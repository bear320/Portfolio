<template>
    <section class="views">
        <div class="project-wrap grid">
            <article class="project" v-for="project in projects" :key="project.id">
                <div class="project-img">
                    <img :src="project.cover" alt="專案封面" class="cover" />
                    <div class="mask"></div>
                </div>
                <div class="project-content">
                    <span class="tag">{{ project.tag }}</span>
                    <h3 class="title">{{ project.title }}</h3>
                    <div class="project-link-wrap">
                        <a :href="project.link" target="blank" class="project-link btn btn-small">
                            <i class="ri-link"></i>
                        </a>
                        <a :href="project.github" target="blank" class="project-link btn btn-small">
                            <i class="ri-code-view"></i>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>
)
<script>
export default {
    components: {},
    data() {
        return {
            projects: [
                {
                    id: 1,
                    tag: "web",
                    title: "Gercery",
                    cover: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
                    hover: "https://fakeimg.pl/350x200/?text=HOVER",
                    link: "https://bear320.github.io/GERCERY/",
                    github: "https://github.com/bear320/GERCERY",
                },
                {
                    id: 1,
                    tag: "web",
                    title: "KOALA+",
                    cover: "https://fakeimg.pl/350x200/?text=COVER",
                    hover: "https://fakeimg.pl/350x200/?text=HOVER",
                    link: "https://tibamef2e.com/cgd103/g1/",
                    github: "https://github.com/bear320/KOALA_PLUS",
                },
            ],
        };
    },
    computed: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.views {
    .project-wrap {
        @include min(576) {
            grid-template-columns: 332px;
            justify-content: center;
        }

        @include min(776) {
            grid-template-columns: repeat(2, 332px);
        }

        @include min(992) {
            gap: 2rem 3rem;
        }

        .project {
            .project-img {
                position: relative;
                border-radius: 1rem;
                overflow: hidden;

                &:hover .mask {
                    bottom: -100%;
                }

                .cover {
                    width: 100%;
                    height: 100%;
                    vertical-align: top;
                    object-fit: cover;
                }

                .mask {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(
                        180deg,
                        hsla(var(--hue), 24%, 40%, 0.3) 0%,
                        hsla(var(--hue), 24%, 4%, 0.7) 95%
                    );
                    transition: all 0.3s 0s ease-out;
                }
            }

            .project-content {
                width: 100%;
                padding: 0.75rem 0.5rem 0;

                // @include min(992) {
                //     padding: 1.5rem;
                // }

                .tag {
                    font-size: var(--smaller-font-size);
                }

                .title {
                    font-size: var(--h3-font-size);
                    margin-bottom: 0.75rem;
                }

                .project-link-wrap {
                    .project-link {
                        padding: 0.5rem;
                    }

                    .project-link + .project-link {
                        margin-left: 0.3rem;
                    }
                }
            }
        }
    }
}
</style>
