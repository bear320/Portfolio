<template>
    <div class="views">
        <div id="cover" class="coverflow">
            <a href="#"><img src="@/assets/images/project1.jpg" alt="" /></a>
            <a href="#"><img src="@/assets/images/project2.jpg" alt="" /></a>
            <a href="#"><img src="@/assets/images/project3.jpg" alt="" /></a>
        </div>
    </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
    components: {
        // HelloWorld,
    },
};
</script>

<style lang="scss" scoped>
/*動畫關鍵影格*/
@-webkit-keyframes silder {
    3% {
        opacity: 1;
        filter: alpha(opacity=100);
    }
    27% {
        opacity: 1;
        filter: alpha(opacity=100);
    }
    30% {
        opacity: 0;
        filter: alpha(opacity=0);
    }
}
@keyframes silder {
    3% {
        opacity: 1;
        filter: alpha(opacity=100);
    }
    27% {
        opacity: 1;
        filter: alpha(opacity=100);
    }
    30% {
        opacity: 0;
        filter: alpha(opacity=0);
    }
}

// .coverflow {
//     width: 700px;
//     height: 490px;
//     position: relative;

//     &:hover a {
//         -webkit-animation-play-state: paused;
//         animation-play-state: paused;
//     }

//     a {
//         display: block;
//         position: absolute;
//         top: 0;
//         left: 0;
//         opacity: 0;
//         filter: alpha(opacity=0);
//         /*當圖片數量增加，影片長度需更改，變為2s*圖片數量*/
//         -webkit-animation: silder 6s linear infinite;
//         animation: silder 6s linear infinite;

//         img {
//             max-width: 100%;
//         }

//         &:nth-child(1) {
//             -webkit-animation-delay: 0s;
//             animation-delay: 0s;
//         }

//         &:nth-child(2) {
//             -webkit-animation-delay: 2s;
//             animation-delay: 2s;
//         }

//         &:nth-child(3) {
//             -webkit-animation-delay: 4s;
//             animation-delay: 4s;
//         }
//     }
// }

.coverflow {
    width: 700px;
    height: 490px;
    position: relative;

    &:hover a {
        -webkit-animation: silder 6s linear infinite;
        animation: silder 6s linear infinite;

        &:nth-child(1) {
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
        }

        &:nth-child(2) {
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }

        &:nth-child(3) {
            -webkit-animation-delay: 4s;
            animation-delay: 4s;
        }
    }

    a {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        filter: alpha(opacity=0);
        /*當圖片數量增加，影片長度需更改，變為2s*圖片數量*/

        -webkit-animation-play-state: paused;
        animation-play-state: paused;

        img {
            max-width: 100%;
        }

        // &:nth-child(1) {
        //     -webkit-animation-delay: 0s;
        //     animation-delay: 0s;
        // }

        // &:nth-child(2) {
        //     -webkit-animation-delay: 2s;
        //     animation-delay: 2s;
        // }

        // &:nth-child(3) {
        //     -webkit-animation-delay: 4s;
        //     animation-delay: 4s;
        // }
    }
}
</style>
