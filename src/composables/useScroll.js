import { onMounted, onUnmounted, ref, } from "vue";

export const useScroll = () => {
  const body = document.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = ref(0);

  const onWindowScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll === 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll.value && !body.classList.contains(scrollDown)) {
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll.value &&
      body.classList.contains(scrollDown)
    ) {
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }

    lastScroll.value = currentScroll;
  };

  onMounted(() => {
    window.addEventListener("scroll", onWindowScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onWindowScroll);

  })
};
