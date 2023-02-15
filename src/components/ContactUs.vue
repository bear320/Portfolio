<template>
    <div class="email-bg-layer" @click.self="hideModal">
        <div class="email-wrap">
            <button type="button" class="close" @click="hideModal">
                <i class="ri-close-line"></i>
            </button>

            <form ref="form" @submit.prevent="sendEmail" class="form">
                <h2>與我聯繫</h2>
                <div class="input-item">
                    <label for="sender">姓名</label>
                    <input
                        type="text"
                        name="sender"
                        id="sender"
                        v-moder.trim="sender"
                        placeholder="請輸入您的姓名（必填）"
                        required
                    />
                </div>
                <div class="input-item">
                    <label for="email">信箱</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        v-moder.trim="email"
                        placeholder="請輸入您的信箱（必填）"
                        required
                    />
                </div>
                <div class="input-item">
                    <label for="subject">主旨</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        v-moder.trim="subject"
                        placeholder="請輸入信件主旨（必填）"
                        required
                    />
                </div>
                <div class="input-item">
                    <label for="msg">內容</label>
                    <textarea
                        name="msg"
                        id="msg"
                        v-moder.trim="msg"
                        placeholder="請輸入信件內容（必填）"
                        required
                    ></textarea>
                </div>
                <!-- <button class="submit" @click="sendEmail">
                    寄送信件
                    <i class="ri-send-plane-fill"></i>
                </button> -->
                <input type="submit" value="寄送信件" />
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
    data() {
        return {
            writtingEmail: false,
            sender: "",
            email: "",
            subject: "",
            msg: "",
        };
    },
    methods: {
        sendEmail() {
            if (!this.$refs.form.checkValidity()) return;

            // const payload = {
            //     sender: this.sender,
            //     email: this.email,
            //     subject: this.subject,
            //     msg: this.msg,
            // };

            emailjs.sendForm("service_p0qrusn", "template_a6smoj9", this.$refs.form, "XnLeEJIsgc3v25oBw").then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    this.hideModal();
                    this.$refs.form.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
        },
        // check() {
        //     this.sendEmail();
        // },
        hideModal() {
            this.$emit("hide-modal", { val: false });
            this.$refs.form.reset();
        },
    },
};
</script>

<style lang="scss" scoped>
.email-bg-layer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: none;
    justify-content: center;
    align-items: center;

    .email-wrap {
        max-width: 768px;
        width: calc(100% - 3rem);
        background-color: var(--body-color);
        box-shadow: 0 0 15px 0 var(--text-color);
        border-radius: 0.5rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        @include max(500) {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        .close {
            position: absolute;
            top: 0.75rem;
            right: 1rem;
            width: fit-content;
            height: fit-content;
            background-color: transparent;
            border: none;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                cursor: pointer;
            }

            @include max(500) {
                top: 0.5rem;
                right: 0.5rem;
            }

            i {
                font-size: 1.75rem;
                color: var(--text-color);

                @include max(500) {
                    font-size: 1.5rem;
                }
            }
        }

        .form {
            padding: 2.5rem 2rem 1.5rem;
            width: calc(100vw - 2rem);

            @include max(500) {
                padding: 2.5rem 1.5rem 1.5rem;
            }

            h2 {
                margin-bottom: 1.5rem;
                text-align: center;
                font-size: var(--h2-font-size);
                color: var(--title-color);
            }

            .input-item {
                position: relative;
                margin-bottom: 1.5rem;
                display: grid;
                grid-template-columns: 100%;

                label {
                    position: absolute;
                    top: -0.5rem;
                    left: 0.75rem;
                    font-size: var(--small-font-size);
                    background-color: var(--body-color);
                    color: var(--first-color);
                    padding: 0 0.25rem;
                }

                input,
                textarea {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    border: 1.5px solid var(--first-color);
                    outline: none;
                    font-size: var(--normal-font-size);
                    color: var(--text-color);
                    background-color: var(--body-color);

                    &::placeholder {
                        color: var(--text-color-light);
                    }
                }

                textarea {
                    resize: none;
                    height: 10rem;

                    @include max(500) {
                        height: 15rem;
                    }

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            }

            // button {
            //     margin: auto;
            //     padding: 0.75rem;
            //     border-radius: 0.5rem;
            //     border: none;
            //     outline: none;
            //     font-size: var(--h3-font-size);
            //     background-color: var(--first-color);
            //     color: var(--body-color);
            //     display: flex;
            //     align-items: center;
            //     column-gap: 0.5rem;

            //     &:hover {
            //         cursor: pointer;
            //     }
            // }

            input[type="submit"] {
                padding: 0.75rem;
                border-radius: 0.5rem;
                border: none;
                outline: none;
                font-size: var(--h3-font-size);
                background-color: var(--first-color);
                color: var(--body-color);
                display: block;
                margin: auto;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
