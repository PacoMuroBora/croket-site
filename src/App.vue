<script setup>
import VideoWrapper from './components/VideoWrapper.vue';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

const scrollRange = '1000';

onMounted(() => {
  gsap.fromTo(
    '#title',
    { opacity: 0, transform: 'translateX(-100px) skewX(8deg)' },
    {
      opacity: 1,
      transform: 'translateX(0) skewX(0)',
      duration: 0.5,
      delay: 0.5,
    }
  );
});
</script>

<template>
  <div
    class="bg-gradient-to-b from-indigo-900 to-slate-800 text-gray-100 relative"
    :style="{
      height: 4 * scrollRange + 'px',
    }"
  >
    <h1
      id="title"
      class="z-10 font-bold italic text-5xl absolute inset-x-0 top-12 mx-8"
    >
      STUDIO CROKET
    </h1>
    <div
      id="trigger0"
      class="absolute w-full top-0"
      :style="{
        height: scrollRange + 'px',
      }"
    ></div>
    <div
      id="trigger1"
      class="absolute w-full top-0"
      :style="{
        height: 2 * scrollRange + 'px',
      }"
    ></div>
    <div
      id="trigger2"
      class="absolute w-full"
      :style="{
        top: scrollRange + 'px',
        height: 2 * scrollRange + 'px',
      }"
    ></div>
    <div class="fixed inset-0">
      <div class="w-full mx-auto">
        <VideoWrapper />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
