<template>
    <section class="views">
        <div class="skills grid">
            <div class="skill-block">
                <h3 class="title">使用者介面設計</h3>
                <div class="skill-wrap">
                    <div class="skill-data" v-for="skill in UIUX" :key="skill.item">
                        <i class="ri-checkbox-circle-line"></i>
                        <div>
                            <h3 class="skill-name">{{ skill.item }}</h3>
                            <span class="skill-level">{{ skill.level }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-block">
                <h3 class="title">前端開發</h3>
                <div class="skill-wrap">
                    <div class="skill-data" v-for="skill in Frontend" :key="skill.item">
                        <i class="ri-checkbox-circle-line"></i>
                        <div>
                            <h3 class="skill-name">{{ skill.item }}</h3>
                            <span class="skill-level">{{ skill.level }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-block">
                <h3 class="title">後端開發</h3>
                <div class="skill-wrap">
                    <div class="skill-data" v-for="skill in Backend" :key="skill.item">
                        <i class="ri-checkbox-circle-line"></i>
                        <div>
                            <h3 class="skill-name">{{ skill.item }}</h3>
                            <span class="skill-level">{{ skill.level }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-block">
                <h3 class="title">語言</h3>
                <div class="skill-wrap">
                    <div class="skill-data" v-for="skill in Language" :key="skill.item">
                        <i class="ri-checkbox-circle-line"></i>
                        <div>
                            <h3 class="skill-name">{{ skill.item }}</h3>
                            <span class="skill-level">{{ skill.level }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            UIUX: [
                {
                    item: "UI/UX",
                    level: "熟練",
                },
                {
                    item: "Wireframe",
                    level: "熟練",
                },
                {
                    item: "Mockup",
                    level: "熟練",
                },
                {
                    item: "Figma",
                    level: "熟練",
                },
                {
                    item: "Photoshop",
                    level: "中等",
                },
                {
                    item: "Illustrator",
                    level: "入門",
                },
                {
                    item: "InDesign",
                    level: "入門",
                },
            ],
            Frontend: [
                {
                    item: "HTML5",
                    level: "熟練",
                },
                {
                    item: "CSS3",
                    level: "熟練",
                },
                {
                    item: "SASS",
                    level: "中等",
                },
                {
                    item: "JavaScript",
                    level: "中等",
                },
                {
                    item: "jQuery",
                    level: "中等",
                },
                {
                    item: "Vue JS",
                    level: "中等",
                },
                {
                    item: "Bootstrap",
                    level: "中等",
                },
                {
                    item: "AJAX",
                    level: "中等",
                },
                {
                    item: "Web APIs",
                    level: "中等",
                },
                {
                    item: "Git",
                    level: "熟練",
                },
            ],
            Backend: [
                {
                    item: "PHP",
                    level: "入門",
                },
                {
                    item: "MySQL",
                    level: "中等",
                },
                {
                    item: "RDB",
                    level: "入門",
                },
                {
                    item: "Firebase",
                    level: "中等",
                },
            ],
            Language: [
                {
                    item: "中文",
                    level: "熟練",
                },
                {
                    item: "英文",
                    level: "中等",
                },
                {
                    item: "德文",
                    level: "中等",
                },
                {
                    item: "泰文",
                    level: "入門",
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
    .skills {
        justify-content: center;
        row-gap: 3.5rem;

        @include min(776) {
            grid-template-columns: repeat(2, 332px);
            column-gap: 3rem;
        }

        .skill-block {
            .title {
                font-size: var(--h3-font-size);
                text-align: center;
                margin-bottom: 1.5rem;

                @include min(992) {
                    font-size: var(--normal-font-size);
                    margin-bottom: 2.5rem;
                }
            }

            .skill-wrap {
                display: grid;
                grid-template-columns: minmax(105px, 110px) minmax(105px, 110px);
                justify-content: center;
                column-gap: 3rem;
                row-gap: 1rem;

                @include max(320) {
                    column-gap: 1rem;
                }

                .skill-data {
                    display: flex;
                    column-gap: 0.5rem;

                    i {
                        font-size: 1rem;
                        color: var(--first-color);
                    }

                    .skill-name {
                        font-size: var(--normal-font-size);
                        font-weight: 500;
                        line-height: 18px;
                    }

                    .skill-level {
                        font-size: var(--smaller-font-size);
                    }
                }
            }
        }
    }
}
</style>
