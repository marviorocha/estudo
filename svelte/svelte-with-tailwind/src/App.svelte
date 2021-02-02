<script>
  import Face from "./components/Face.svelte"
  import Container from "./components/Container.svelte"
  import Botton from "./components/Botton.svelte"
  import {Howl, Howler} from 'howler';
  let say = 'Bey'
  let conter = 0
  let notshow = false
  setTimeout(() => {
  say = "Welcome"
  }, 1000);
 
 var sound = new Howl({
  src: ['sound.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.5,
});

 

</script>

<Container>
  {#if notshow }
  <h1 class="text-5xl uppercase text-gray-800">Hello {say}! {conter} 
    <Face /></h1>
  {/if}
  
 <p></p>
 
   
    <Botton on:show={() => { notshow = true}} on:hidden={() => {sound.play()}} on:show={() => { sound.stop()}} ></Botton>
     
 
</Container>
