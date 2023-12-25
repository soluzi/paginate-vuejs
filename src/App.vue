<script setup lang="ts">
import { ref } from "vue";
import PaginateVuejs from "./components/paginate-vuejs.vue";
import "./basic.css";

const currentPage = ref(1);

const clickCallback = (page: number) => {
  currentPage.value = page;
};
</script>

<template>
  <PaginateVuejs
    :total="200"
    disabled
    :boundaryCount="2"
    :siblingCount="2"
    :showFirstButton="true"
    :showLastButton="false"
    :click-handler="clickCallback"
    type="link"
    linkUrl="{page}"
    pagination-types="normal"
  >
    <template #firstBtn>
      <svg viewBox="0 0 24 24">
        <path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
      </svg>
    </template>
    <template #prevBtn>
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </template>
    <template #nextBtn>
      <svg viewBox="0 0 24 24">
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </template>
    <template #lastBtn>
      <svg viewBox="0 0 24 24">
        <path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
      </svg>
    </template>
  </PaginateVuejs>
  <br />
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
    pagination-types="of"
    >
    <template #firstBtn>
      <svg viewBox="0 0 24 24">
        <path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
      </svg>
    </template>
    <template #prevBtn>
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </template>
    <template #nextBtn>
      <svg viewBox="0 0 24 24">
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </template>
    <template #lastBtn>
      <svg viewBox="0 0 24 24">
        <path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
      </svg>
    </template>
  </PaginateVuejs>
  <br />
  <PaginateVuejs
    :total="200"
    disabled
    :boundaryCount="2"
    :siblingCount="2"
    :showFirstButton="true"
    :showLastButton="false"
    :click-handler="clickCallback"
    type="link"
    linkUrl="{page}"
    pagination-types="standard"
  >
    <template #firstBtn>
      <svg viewBox="0 0 24 24">
        <path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
      </svg>
    </template>
    <template #prevBtn>
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </template>
    <template #nextBtn>
      <svg viewBox="0 0 24 24">
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </template>
    <template #lastBtn>
      <svg viewBox="0 0 24 24">
        <path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
      </svg>
    </template>
  </PaginateVuejs>
  <br />
  <PaginateVuejs
    :total="200"
    disabled
    :boundaryCount="2"
    :siblingCount="2"
    :showFirstButton="false"
    :showLastButton="true"
    :click-handler="clickCallback"
    type="link"
    linkUrl="{page}"
    pagination-types="minimal"
  >
    <template #firstBtn>
      <svg viewBox="0 0 24 24">
        <path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
      </svg>
    </template>
    <template #prevBtn>
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </template>
    <template #nextBtn>
      <svg viewBox="0 0 24 24">
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </template>
    <template #lastBtn>
      <svg viewBox="0 0 24 24">
        <path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
      </svg>
    </template>
  </PaginateVuejs>
</template>

<style></style>
