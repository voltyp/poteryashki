<script setup lang="ts">
 import { useCounter } from '~/store/example';

 const counter = useCounter();
</script>

<template>
  <h1>Hello world</h1>
  <h2>Example pinia</h2>
  counter: {{ counter.count }}
  <button @click="counter.increment()">Increment</button>
</template>
