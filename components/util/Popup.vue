<template>
  <div v-if="visible" class="popup-overlay">
    <div class="popup-content max-h-[734px] overflow-y-auto">
      <div class="cursor-pointer w-fit" @click="$emit('close')">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7003 14.2529L9.44742 8.00002L15.7003 1.74718C16.0999 1.34748 16.0999 0.699479 15.7002 0.299844C15.3006 -0.0998579 14.6525 -0.0998579 14.2528 0.299844L8.00002 6.55261L1.74718 0.299777C1.34755 -0.0999256 0.699479 -0.0999256 0.299777 0.299777C-0.0999256 0.699479 -0.0999256 1.34748 0.299777 1.74718L6.55262 8.00002L0.299777 14.2529C-0.0999256 14.6526 -0.0999256 15.3006 0.299777 15.7003C0.499628 15.9001 0.761571 16 1.02344 16C1.28539 16 1.54733 15.9001 1.74718 15.7003L8.00002 9.44742L14.2529 15.7003C14.4527 15.9001 14.7147 16 14.9766 16C15.2385 16 15.5005 15.9001 15.7003 15.7003C16.1 15.3006 16.1 14.6526 15.7003 14.2529Z"
            fill="#040404"
          />
        </svg>
      </div>
      <div class="px-7 mx-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  visible: Boolean,
});

defineEmits(["close"]);
</script>

<style lang="scss">
$popup-bg-color: white;
$overlay-bg-color: rgba(0, 0, 0, 0.5);
$popup-border-radius: 20px;
$popup-width: 631px;
$text-color: #040404;
$input-border-color: #f8f8ff;
$input-padding: 20px;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $overlay-bg-color;
  @include flex-center;
  z-index: 1000;
}

.popup-content {
  background: $popup-bg-color;
  padding: 2rem;
  border-radius: $popup-border-radius;
  max-width: $popup-width;
  width: 100%;
  position: relative;

  h2 {
    color: $text-color;
    font-weight: 500;
    text-align: center;
    font-size: 28px;
    line-height: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &.main {
      gap: 2rem;
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    border: 1px solid $input-border-color;
    border-radius: 10px;
    padding: $input-padding;
    outline: none;
  }

  label {
    font-weight: 700;
    letter-spacing: 0.025em;
    cursor: pointer;
  }

  .switch {
    color: #3162da;
    text-align: start;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
