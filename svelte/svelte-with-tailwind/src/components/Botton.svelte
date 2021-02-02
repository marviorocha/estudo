<script>
    import { createEventDispatcher } from "svelte"
    const dispatcher = createEventDispatcher();

    const hidden = () => { dispatcher('hidden') }
    const show = () => { dispatcher('show') }

</script> 

 

<button on:click={hidden}  class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-900 hover:bg-blue-700"  >
  Player
</button>
<button  on:click={show} class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700" >
  Hidden
  </button>
   