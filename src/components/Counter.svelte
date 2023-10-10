<!-- Counter.svelte -->
<script>
    let count = 0;
  
    function increment() {
      count += 1;
    }
  
    function decrement() {
      count -= 1;
    }
  </script>
  
  <style>

  </style>
  
  <div class="counter">
    <p>Count: {count}</p>
    <button on:click={increment}>Increment</button>
    <button on:click={decrement}>Decrement</button>
  </div>
  