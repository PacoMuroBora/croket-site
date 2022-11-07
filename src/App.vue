<script setup>
import VideoWrapper from './components/VideoWrapper.vue';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

const scrollRange = '2000';

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
    class="bg-gradient-to-b from-fuchsia-900/20 to-black text-gray-100 relative"
    :style="{
      height: 3.5 * scrollRange + 'px',
    }"
  >
    <h1
      id="title"
      class="z-10 font-bold italic text-5xl sm:text-8xl absolute inset-x-0 top-12 mx-8"
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
    <div
      class="fixed inset-0 top-1/2 -translate-y-1/2 sm:top-0 sm:translate-y-0 flex justify-center items-center"
    >
      <div class="w-full mx-auto relative">
        <div class="absolute inset-12 text-3xl sm:text-5xl">
          <h1 class="font-bold italic mb-8">STUDIO CROKET</h1>
          <div class="font-light">
            Follow me on Instagram:
            <br />
            <a class="underline" href="https://www.instagram.com/pacocroket/"
              >@pacocroket</a
            >
          </div>
        </div>

        <VideoWrapper />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
