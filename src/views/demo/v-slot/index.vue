<template>
  <div>
    <demo-pay>
      <template v-slot:default>
        <p>slot default</p>
      </template>
      <template #header="{ user }">
        <p>{{ user.firstname }}</p>
      </template>
      <template v-slot:footer>
        <p>footer</p>
      </template>
    </demo-pay>
    <div>-----------------todolist-----------------</div>
    <todo-list v-bind:todos="todos">
      <template #todo="{todo}">
        <span v-if="todo.isComplete">**</span>
        {{todo.text}}
      </template>
    </todo-list>

  </div>
</template>
<script>
import demoPay from './child/index'
import todoList from './todolist/index'
export default {
  components: {
    demoPay,
    todoList
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
