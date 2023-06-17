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
          <li class="link medium">
            <a href="https://medium.com/@aaabear320" target="_blank">
              <i class="ri-medium-fill"></i>
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
        <div class="info" v-for="(item, index) in info" :key="item.desc">
          <h3 class="number">{{ item.number }}<span v-if="index === 1">+</span></h3>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>

      <div class="btn-wrap">
        <a
          href="https://drive.google.com/file/d/1rlC4dUzS7jXXA0C0Ll0ZLtPQPUNzb5dN/view?usp=sharing"
          target="_blank"
          class="btn"
        >
          查看履歷
          <i class="ri-external-link-line"></i>
        </a>
        <div class="small-btn-wrap">
          <a href="tel:+886-960779920" class="btn btn-small btn-gray">
            <i class="ri-phone-line"></i>
          </a>
          <a href="javascript:;" class="btn btn-small btn-gray" @click="showModal">
            <i class="ri-mail-line"></i>
          </a>
        </div>
      </div>
    </div>
  </header>

  <main class="main">
    <section class="filter-wrap container">
      <div class="content">
        <router-link to="/">簡介</router-link>
        <router-link to="/projects">作品集</router-link>
        <router-link to="/skills">技能</router-link>
      </div>
      <!-- 減少呼叫 API / 切換 tab 保留元件狀態，而非重新渲染 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
  </main>

  <footer class="footer container">
    <span class="copy-right"> &#169; Oliver Xiong. All rights reserved. </span>
  </footer>

  <!-- 是否顯示綁定 showEmail 數值（預設為隱藏）/ 獲取子組件傳遞之數值 -->
  <ContactUs :style="{ display: showEmail ? 'flex' : 'none' }" @hide-modal="hideModal"></ContactUs>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import ContactUs from "@/components/ContactUs.vue";

export default {
  components: {
    ContactUs,
  },
  data() {
    return {
      info: [
        {
          number: "2Y+",
          desc: "工作經驗",
        },
        {
          number: 0,
          desc: "完成專案",
        },
        {
          number: "25Y",
          desc: "目前年紀",
        },
      ],
      showEmail: false,
    };
  },
  computed: {},
  methods: {
    toggleTheme() {
      // 獲得 id 為 theme-btn 的 DOM 元素（即切換主題之按鈕）
      const themeButton = document.getElementById("theme-btn");

      // 透過 localstorage 獲取先前所儲存的主題和圖示（如果有的話）
      const selectedTheme = localStorage.getItem("selected-theme");
      const selectedIcon = localStorage.getItem("selected-icon");

      // 獲取當前頁面主題的 function（如若 body 有 dark-theme 之 class 則為 dark，反之則為 light）
      const getCurrentTheme = () => (document.body.classList.contains("dark-theme") ? "dark" : "light");
      // 獲取當前頁面圖示的 function（如若切換主題按鈕有 ri-sun-line 之 class 則為 ri-moon-line，反之則為 ri-sun-line）
      const getCurrentIcon = () => (themeButton.classList.contains("ri-sun-line") ? "ri-moon-line" : "ri-sun-line");

      // 根據之前保存之主題和圖示選項，判斷是否套用暗色主題和圖示
      if (selectedTheme) {
        // 如若儲存主題為 dark，body 則新增 dark-theme 之 class，反之則移除 dark-theme 之 class
        document.body.classList[selectedTheme === "dark" ? "add" : "remove"]("dark-theme");
        // 如若儲存圖示為 ri-moon-line，切換主題按鈕則新增 ri-sun-line 之 class，反之則移除 ri-sun-line 之 class
        themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"]("ri-sun-line");
      }

      // 切換頁面的主題和圖示
      document.body.classList.toggle("dark-theme");
      themeButton.classList.toggle("ri-sun-line");

      // 將最新選項儲存至 localstorage
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    },
    async getProjectsLength() {
      // 使用 onSnapshot() 來偵聽 projects 的變化
      // 第一個參數：要偵聽的集合
      // 第二個參數：參數發生變化時執行之 callback function
      onSnapshot(collection(db, "projects"), (querySnapshot) => {
        // 獲取 projects 中文檔的數量，並儲存至對應的 data 中
        this.info[1].number = querySnapshot.docs.length;
      });
    },
    showModal() {
      // 顯示寄信的 modal
      this.showEmail = true;
    },
    hideModal({ val }) {
      // 獲取子物件傳遞之數值
      this.showEmail = val;
    },
  },
  created() {
    this.getProjectsLength();
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
