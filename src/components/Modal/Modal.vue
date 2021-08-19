<template>
  <b-modal :id="modalId" :hide-footer="true" :size="size" :title="modalTitle">
    <slot name="content">{{content}}</slot>
  </b-modal>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    content: String,
    modalId: String,
    modalTitle: String,
    size: String
  }
}
</script>
