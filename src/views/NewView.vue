<template>
    <section class="views">
        <div class="skills grid">
            <img
                :src="project.img"
                v-for="project in projects"
                :key="project.id"
                :id="project.id"
                :data-hover="project.hover"
                @mouseover.prevent="inImg(project.id)"
                @mouseout.prevent="outImg(project.id)"
                @touchstart.prevent="inImg(project.id)"
                @touchend.prevent="outImg(project.id)"
            />
        </div>
    </section>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            projects: [
                {
                    id: "p1",
                    img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
                    hover: "https://media1.giphy.com/media/kM4NdYwraoK1hksQSA/200w.gif?cid=6c09b952llm9rq1ijioxbvvwtje3pdypw5ao6lbdx3ud2qk4&rid=200w.gif&ct=g",
                },
                {
                    id: "p2",
                    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*",
                    hover: "https://i.gifer.com/origin/b0/b05bfec1ff5b48cc0529d6a035b8d194.gif",
                },
            ],
            temp: "",
        };
    },
    computed: {},
    methods: {
        inImg(idThis) {
            const show = document.getElementById(idThis);
            this.temp = show.src;
            show.src = show.dataset.hover;
        },
        outImg(idThis) {
            const show = document.getElementById(idThis);
            show.src = this.temp;
        },
    },
};
</script>

<style lang="scss" scoped>
img {
    width: 300px;
    height: 300px;
}
// img:hover {
//     content: url("https://media1.giphy.com/media/kM4NdYwraoK1hksQSA/200w.gif?cid=6c09b952llm9rq1ijioxbvvwtje3pdypw5ao6lbdx3ud2qk4&rid=200w.gif&ct=g");
// }

// img:active {
//     content: url("@/assets/images/project4.jpg");
// }
</style>
