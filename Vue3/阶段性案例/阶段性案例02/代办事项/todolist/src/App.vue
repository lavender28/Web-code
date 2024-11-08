<template>
  <div class="app">
    <ToDoHeader @addTodo="addTodo" />
    <ToDoMain :list="showList" @delTodo="delTodo" />
    <ToDoFooter
      :lastLength="lastLength"
      :status="status"
      @updateStatus="updateStatus"/>
  </div>
</template>

<script setup>
import ToDoHeader from './components/ToDoHeader.vue';
import ToDoMain from './components/ToDoMain.vue';
import ToDoFooter from './components/ToDoFooter.vue';
import { computed, ref } from 'vue';

let status = ref('all');
const list = ref([
  { id: 1, name: '晨练', done: false, },
  { id: 2, name: '练书法', done: true, }
]);

function addTodo(name) {
  const nextId = list.value.length
    ? Math.max(...list.value.map(item => item.id)) + 1
    : 1;
  list.value.push({ id: nextId, name: name, done: false })
}

function delTodo(index) {
  list.value.splice(index, 1)
}

const lastLength = computed(()=>{
  return list.value.filter(item => !item.done).length
})

const showList = computed(() => {
  if (status.value === 'all') {
    return list.value;
  }
  if (status.value === 'active') {
    return list.value.filter(item => !item.done);
  }
  if (status.value === 'completed') {
    return list.value.filter(item => item.done);
  }
});

function updateStatus(value) {
  status.value = value
}
</script>
