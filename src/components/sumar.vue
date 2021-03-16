<template>
  <div>
    <button @click="addResult">Sumar</button>
    <span> Resultado:{{ result }} </span>
    <div v-if="isPositive">Yekale!</div>
  </div>
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'Sumar', 
  data() {
    return {
      datita: 1
    }
  },
  methods: {
    ...mapActions(['updateResult']),
    ...mapActions(['addResult']),
  },
  computed: {
    ...mapState(['result']),
    ...mapGetters(['isPositive']),
  },
}
</script>

<style>

</style>