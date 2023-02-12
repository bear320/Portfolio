<template>
    <header class="profile container">
        <div class="profile-wrap grid">
            <div class="content">
                <div class="border">
                    <div class="portrait">
                        <img src="@/assets/images/perfil.png" alt="個人照" />
                    </div>
                </div>

                <h2 class="name">Oliver Xiong</h2>
                <h3 class="job">Frontend Developer</h3>

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
                    Download CV
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
                <button class="filter-btn">
                    <router-link to="/">About Me</router-link>
                </button>
                <button class="filter-btn">
                    <router-link to="/projects">Projects</router-link>
                </button>
                <button class="filter-btn">
                    <router-link to="/skills">Skills</router-link>
                </button>
            </div>
            <router-view></router-view>
        </section>
    </main>
</template>

<style lang="scss">
.profile {
    position: relative;
    padding-top: 3.5rem;

    .profile-wrap {
        row-gap: 2rem;

        .content {
            display: grid;
            text-align: center;

            .border {
                border: 3.5px solid $first-color;
                justify-self: center;
                width: 115px;
                height: 115px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                margin-bottom: 0.75rem;

                .portrait {
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(180deg, hsla($hue, $sat, $lig, 1) 0%, hsla($hue, $sat, $lig, 0.2) 100%);
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;

                    img {
                        width: 75px;
                    }
                }
            }

            .name {
                font-size: $h2-font-size;
            }

            .job {
                font-size: $smaller-font-size;
                font-weight: 500;
                color: $text-color;
                margin-bottom: 1rem;
            }

            .link-wrap {
                display: flex;
                justify-content: center;
                column-gap: 0.75rem;
                // margin-bottom: 0.75rem;

                .link a {
                    font-size: 1.25rem;
                    color: $text-color;
                    transition: 0.3s;

                    &:hover {
                        color: $first-color;
                    }
                }
            }
        }

        .info-wrap {
            grid-template-columns: repeat(3, max-content);
            justify-content: center;
            column-gap: 2.5rem;

            .info {
                text-align: center;

                .number {
                    font-size: $normal-font-size;
                    margin-bottom: 0.25rem;
                }

                .desc {
                    font-size: $smaller-font-size;
                    font-weight: 500;
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

            .btn {
                display: inline-flex;
                align-items: center;
                column-gap: 0.5rem;
                color: #fff;
                background-color: $first-color;
                padding: 1.15rem 1.5rem;
                border-radius: 0.5rem;
                transition: 0.3s;
                box-shadow: 0 8px 24px hsla($hue, $sat, $lig, 0.25);

                i {
                    font-size: 1.25rem;
                }

                &:hover {
                    background-color: $first-color-alt;
                }
            }

            .small-btn-wrap {
                column-gap: 0.25rem;

                .btn-small {
                    padding: 0.75rem;
                    box-shadow: none;
                }

                .btn-gray {
                    background-color: $text-color-lighten;
                    color: $title-color;

                    &:hover {
                        background-color: $text-color-light;
                    }
                }
            }
        }
    }
}
</style>
