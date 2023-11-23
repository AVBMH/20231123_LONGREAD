<span class="scroll">
  <div class="scroll-icon-container">
    <svg class="arrows">
      <path class="a1" d="M0 0 L30 32 L60 0" />
      <path class="a2" d="M0 20 L30 52 L60 20" />
      <path class="a3" d="M0 40 L30 72 L60 40" />
    </svg>
  </div>
</span>

<style>
  .scroll {
    margin-top: 400px;
  }
  .scroll-icon-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  .arrows {
    width: 60px;
    height: 72px;
    left: 50%;
    margin-left: -30px;
    bottom: 20px;
    margin-top: 2em;
    transform: scale(0.8);
  }

  .arrows path {
    stroke: #ffffff;
    fill: transparent;
    stroke-width: 2px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes arrow /*Safari and Chrome*/ {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .arrows path.a1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s; /* Safari 和 Chrome */
  }

  .arrows path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
  }

  .arrows path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s; /* Safari 和 Chrome */
  }
</style>
