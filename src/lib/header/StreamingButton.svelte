<script lang="ts">

</script>

<button href="#" class="btn flex items-center justify-center w-full rounded-60px py-12px px-24px">
  <slot/>
</button>

<style>
  .btn {
    background: linear-gradient(90deg, #00D8FF, #41B883, #F7DF1E, #00D8FF);
    background-size: 400%;
  }

  .btn {
    animation: animate 8s linear infinite;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  .btn::before {
    content: '';
    position: absolute;
    inset: -4px;

    z-index: -1;
    background: linear-gradient(90deg, #00D8FF, #41B883, #F7DF1E, #00D8FF);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  .btn::before {
    filter: blur(10px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
</style>
