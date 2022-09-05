<template>
    <div :class="visibilyClasses" class="px-5 py-3 drop-shadow-2xl w-[40vw] sm:w-[30vw] md:w-[20vw] bg-[#e3e3e3] h-screen transition-all ease-in-out fixed tabindex-0">
        <div>
            <ul class="space-y-3 text-lg mt-4">
                <li class="hover:pl-3 transition-all ease-in-out"><router-link to="/">Home</router-link></li>
                <li class="hover:pl-3 transition-all ease-in-out"><router-link to="/portfolio">Portfolio</router-link></li>
<!--                <li class="hover:pl-3 transition-all ease-in-out"><router-link to="/portfolio">About</router-link></li>-->
            </ul>
        </div>
    </div>
</template>

<script setup>
import {computed, defineProps} from "vue";

const props = defineProps({
    open: { type: Boolean, default: false },
});

const visibilyClasses = computed(() =>
    props.open
        ? 'left-0'
        : '-left-[100%]'
);

</script>
