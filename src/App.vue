<script setup lang="ts">
import PaginateVuejs from "./components/paginate-vuejs.vue";

const clickCallback = (page: number) => {
  console.log(page);
};
</script>

<template>
  <PaginateVuejs
    :total="200"
    disabled
    :boundaryCount="2"
    :siblingCount="2"
    :showFirstButton="true"
    :showLastButton="true"
    :click-handler="clickCallback"
    type="link"
    linkUrl="{page}"
  >
  <template v-slot:firstBtn>
      {{ "<<" }}
  </template>
  <template v-slot:lastBtn>
      {{ ">>" }}
  </template>
  </PaginateVuejs>
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.pagination-ellipsis {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
}

.page-link {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.page-link:hover {
  background-color: #d8d8d8;
}
.active {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active:hover {
  background-color: #2988c8;
}
</style>
