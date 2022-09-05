<template>
    <div class="flex flex-row transition-all ease-in-out" :class="{ 'pl-[20vw]': sidebarOpen }">
        <Sidebar :open="sidebarOpen" />

        <div>
            <div class="p-5 text-xl font-bold flex flex-row space-x-7 items-center">
                <Burger @click="toggleSidebar" />

                <router-link to="/" v-if="header">
                    Luke Sheppard
                </router-link>
            </div>
            <div class="ml-[7vw] mt-2">
                <div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Burger from "@/components/Burger";
import {defineProps, ref} from "vue";
import Sidebar from "@/components/Sidebar";

defineProps({
    header: { type: Boolean, default: true },
});

const sidebarOpen = ref(false);

const toggleSidebar = () => {
    sidebarOpen.value = ! sidebarOpen.value;
};

</script>
