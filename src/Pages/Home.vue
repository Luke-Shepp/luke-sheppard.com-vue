<template>
    <Page :header="false">
    <div class="p-5">
        <div class="pt-10">
            <h1>Luke Sheppard</h1>
            <h2>
                <span class="developer">Contract Software Developer</span> and Japanese Car Enthusiast
            </h2>
            <div class="links">
                <a href="https://github.com/Luke-Shepp" class="link" target="_blank" rel="noreferrer">
                    <GitHub />
                    <p>GitHub</p>
                </a>
                <a href="https://www.linkedin.com/in/luke-shepp/" class="link" target="_blank" rel="noreferrer">
                    <LinkedIn />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    </div>
    </Page>
</template>

<script setup>
import GitHub from "@/components/Logos/GitHub";
import LinkedIn from "@/components/Logos/LinkedIn";
import Page from "@/components/Page";

</script>
