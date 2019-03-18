<template>
  <div class="hello">
      hello
  </div>
</template>

<script>
import { flowStatistics } from '../api/index'
export default {
  name: 'HelloWorld',
  methods: {
  },
  created() {
    console.log(flowStatistics());
  }
}
</script>

<style>
</style>