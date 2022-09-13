<template>
  <div class="flex-demo">
    <div>flex-dmeo</div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'FlexDemo',
  setup() {
    return {}
  },
})
</script>

<style>
.flex-demo {
  width: 500px;
  height: 300px;
  background-color: aliceblue;
}
</style>
