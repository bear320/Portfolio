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
        },
        {
          item: "Wireframe",
        },
        {
          item: "Mockup",
        },
        {
          item: "Figma",
        },
        {
          item: "Photoshop",
        },
        {
          item: "Illustrator",
        },
        {
          item: "InDesign",
        },
      ],
      Frontend: [
        {
          item: "HTML5",
        },
        {
          item: "CSS3, SASS",
        },
        {
          item: "JavaScript",
        },
        {
          item: "TypeScript",
        },
        {
          item: "Vue.js",
        },
        {
          item: "Vite",
        },
        {
          item: "Nuxt3",
        },
        {
          item: "Axios",
        },
        {
          item: "Bootstrap",
        },
        {
          item: "Naive UI",
        },
        {
          item: "Git",
        },
        {
          item: "Github",
        },
      ],
      Backend: [
        {
          item: "PHP",
        },
        {
          item: "MySQL",
        },
        {
          item: "RDB",
        },
        {
          item: "Firebase",
        },
      ],
      Language: [
        {
          item: "中文",
        },
        {
          item: "英文",
        },
        {
          item: "德文",
        },
        {
          item: "泰文",
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
        row-gap: 2rem;

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
