<template>
    <div :class="$style.loader">Loading...</div>
</template>

<script>
/**
 * loaderのAtoms
 */
export default {
    name: "BaseLoader"
};
</script>
<style lang="scss" module>
.loader {
    font-size: 10px;
    text-indent: -9999em;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: $loader;
    background: linear-gradient(to right, $loader 10%, rgba(122, 122, 122, 0) 42%);
    position: relative;
    animation: loader 1.4s infinite linear;
    transform: translateZ(0);
}
.loader:before {
    width: 50%;
    height: 50%;
    background: $loader;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
}
.loader:after {
    background: $theme;
    width: 88%;
    height: 88%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
