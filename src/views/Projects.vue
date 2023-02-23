<template>
    <section class="views">
        <div class="project-wrap grid">
            <article class="project" v-for="project in projects" :key="project.id">
                <div class="project-img">
                    <img
                        :src="project.cover"
                        alt="專案封面"
                        class="cover"
                        :id="project.id"
                        :data-hover="project.thumbnail"
                    />
                    <div
                        class="mask"
                        @mouseover.prevent="inImg(project.id)"
                        @mouseout.prevent="outImg(project.id)"
                        @touchstart.prevent="inImg(project.id)"
                        @touchend.prevent="outImg(project.id)"
                    ></div>
                </div>
                <div class="project-content">
                    <span class="tag">{{ project.tag }}</span>
                    <h3 class="title">{{ project.title }}</h3>
                    <div class="project-link-wrap">
                        <a :href="project.link" target="_blank" class="project-link btn btn-small">
                            <i class="ri-link"></i>
                        </a>
                        <a :href="project.github" target="_blank" class="project-link btn btn-small">
                            <i class="ri-code-s-slash-line"></i>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

export default {
    components: {},
    data() {
        return {
            projects: [],
            temp: "",
        };
    },
    computed: {},
    methods: {
        async getProjects() {
            // 使用 firestore 數據庫獲取資料
            // 使用 onSnapshot() 來偵聽 projects 的變化
            // 第一個參數：要偵聽的集合
            // 第二個參數：參數發生變化時執行之 callback function
            onSnapshot(collection(db, "projects"), (querySnapshot) => {
                // 定義 fbProjects 為一空陣列
                const fbProjects = [];

                // 使用 forEach 遍歷 projects 中的每個文檔
                querySnapshot.forEach((doc) => {
                    // 將文檔中的數據存為一個名為 project 物件
                    const project = {
                        id: doc.id,
                        tag: doc.data().tag,
                        title: doc.data().title,
                        cover: doc.data().cover,
                        thumbnail: doc.data().thumbnail,
                        link: doc.data().link,
                        github: doc.data().github,
                    };
                    // 將 project 添加至 fbProjects 陣列中
                    fbProjects.push(project);
                });
                // 將 fbPrjects 賦值給 this.projects
                this.projects = fbProjects;
            });
        },
        inImg(ID) {
            // 透過 id 獲取該元素之 dom 元素（圖片）
            const show = document.getElementById(ID);
            // 將該圖片之 src 賦值給 this.temp
            this.temp = show.src;
            // 將圖片之 src 更改為自訂屬性 data-hover 之值
            show.src = show.dataset.hover;
        },
        outImg(ID) {
            // 透過 id 獲取該元素之 dom 元素（圖片）
            const show = document.getElementById(ID);
            // 將 this.temp 賦值給該圖片之 src
            show.src = this.temp;
            // 清空 this.temp 之值
            this.temp = "";
        },
    },
    created() {
        this.getProjects();
    },
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

                &:hover {
                    outline: 0.75px solid var(--text-color-lighten);

                    .mask {
                        opacity: 0;
                    }
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
                    top: 0;
                    left: 0;
                    background: linear-gradient(
                        180deg,
                        hsla(var(--hue), 24%, 40%, 0.15) 0%,
                        hsla(var(--hue), 24%, 4%, 0.5) 95%
                    );
                    opacity: 1;
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
