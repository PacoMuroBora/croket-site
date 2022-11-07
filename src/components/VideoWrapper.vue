<template>
  <div class="w-full aspect-video relative">
    <div id="mask0" class="absolute inset-0">
      <video class="aspect-video w-full" autoplay muted loop>
        <source src="assets/vid1.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mask1" class="absolute inset-0">
      <video class="aspect-video w-full" autoplay muted loop>
        <source src="assets/vid2.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mask2" class="absolute inset-0">
      <video class="aspect-video w-full" autoplay muted loop>
        <source src="assets/vid3.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to('#mask0', {
    clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
    scrollTrigger: {
      trigger: '#trigger0',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#trigger1',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  tl1
    .to('#mask1', {
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    })
    .to('#mask1', {
      clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
    });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#trigger2',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  tl2
    .to('#mask2', {
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    })
    .to('#mask2', {
      clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
    });
});
</script>

<style lang="scss" scoped>
#mask0 {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
}
#mask1,
#mask2 {
  clip-path: polygon(0 0, 0 0%, 0 100%, 0% 100%);
}
</style>
