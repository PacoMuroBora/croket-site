<template>
  <div
    class="w-[200%] pointer-events-none -translate-x-1/4 sm:w-full aspect-video relative sm:translate-x-0"
  >
    <div id="mask0" class="absolute inset-0">
      <video ref="vid1ref" class="aspect-video w-full" muted>
        <source src="../assets/videos/Redgitter.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mask1" class="absolute inset-0">
      <video ref="vid2ref" class="aspect-video w-full" muted>
        <source src="../assets/videos/Lightning.mp4" type="video/mp4" />
      </video>
    </div>
    <div id="mask2" class="absolute inset-0">
      <video ref="vid3ref" class="aspect-video w-full" muted>
        <source src="../assets/videos/Feedback.mp4" type="video/mp4" />
      </video>
    </div>
    <div
      class="absolute inset-0 transition-all"
      :class="{ 'bg-black/50': !loaded }"
    ></div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';
gsap.registerPlugin(ScrollTrigger);

const vid1ref = ref();
const vid2ref = ref();
const vid3ref = ref();
const loaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
    resetAllVideos();
  }, 1000);

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

  // restart all videos together
  vid1ref.value.onended = () => {
    resetAllVideos();
  };
});

function resetAllVideos() {
  resetVideo(vid1ref.value);
  resetVideo(vid2ref.value);
  resetVideo(vid3ref.value);
}

function resetVideo(videoEl) {
  videoEl.pause();
  videoEl.currentTime = 0;
  videoEl.play();
}
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
