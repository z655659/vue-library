<template>
  <li @click.stop='showId' v-bind:id="model.category_id">
    <span @click="toggle">
      <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
      <i v-if="!isFolder" class="icon file-text"></i>
      {{ model.category_name }}

    </span>
    <ul v-show="open" v-if="isFolder">
      <tree-menu v-for="item in model.sub_category_list" :model="item"></tree-menu>
    </ul>
  </li>
</template>
 
<script>
import axios from 'axios'
export default {
  name: 'treeMenu',
  props: ['model'],
  data() {
    return {
      open: false,
      // isFolder: true
      dataid: ''
    }
  },
  computed: {
    isFolder: function() {
      return this.model.sub_category_list && this.model.sub_category_list.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open
      }
     },
    showId: function(){
      this.dataid = event.currentTarget.id
      this.$router.push('/MainApp/ARL/1')
      this.$store.commit('getDataid')    
    }
  }
}
</script>
 
<style scoped>
 ul,li {
  list-style: none;
} 
i.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.icon.folder {
  background-color: red;
  background-image: url();
}
.icon.folder-open {
  /* background-image: url(./package1.png); */
  background-color: green;
}
.icon.file-text {
  /* background-image: url(./package1.png); */
  background-color: blue;
}
.tree-menu li {
  line-height: 1.5;
}
</style>

