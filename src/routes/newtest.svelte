
<script>
    
    import { onMount } from 'svelte'
    import { btnFunction } from '../van-js/Test.js'

    onMount(()=>{
    btnFunction();
  }
  )

    
</script>




<div style="padding: 3rem; width: 800px; margin: 0 auto;background-color:aliceblue;text-align:center;font-weight:bold;">
            
    <div id="change" style="margin-bottom: 1rem;">
      Can you change me to Friday!?</div>
    
    
    <button id="btn" style="background-color:blue; color:white;padding: 1rem 3rem;font-weight:bold;">YES</button>
      
    </div>