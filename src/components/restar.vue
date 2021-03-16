<template>
  <div>
    <button @click="substractAndAddCounter">Restar</button>
    <span> Resultado:{{ result }} </span>
    <div v-if="isPositive">Yekale!</div>

  </div>
</template>
<script>

import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  name: 'Restar',
  methods: {
    ...mapActions(['updateResult']),
    ...mapActions(['substractResult']),
    ...mapActions('substractCounter', ['incrementResult']),
    substractAndAddCounter() {
      this.substractResult();
      this.incrementResult();
    }
  },
  computed: {
    ...mapState(['result']),
    ...mapState('substractCounter', ['counter']),
    ...mapGetters(['isPositive']),
  },
} 
</script>

<style>

</style>