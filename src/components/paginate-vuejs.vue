<template>
  <ul id="paginate-vuejs" :class="[pageContainerClass]">
    <template v-for="item in itemList" :key="item">
      <!-- First page -->
      <template v-if="item === 'first'">
        <li :class="[pageItemClass, firstBtnClass]">
          <component
            v-if="type === 'button'"
            is="button"
            :class="pageLinkClass"
            :disabled="currentPageRef === 1 || disablePagination"
            @click.prevent="onClickHandler(1)"
          >
            <slot name="firstBtn">&laquo;</slot>
          </component>
          <component
            v-else
            is="a"
            :class="[
              pageLinkClass,
              { disabled: currentPageRef === 1 || disablePagination },
            ]"
            :href="navigationHandler(1)"
            @click.prevent="onClickHandler(1)"
          >
            <slot name="firstBtn">&laquo;</slot>
          </component>
        </li>
      </template>

      <!-- Previous page -->
      <template v-else-if="item === 'previous'">
        <li :class="[pageItemClass, prevBtnClass]">
          <component
            v-if="type === 'button'"
            is="button"
            :class="pageLinkClass"
            :disabled="currentPageRef === 1 || disablePagination"
            @click.prevent="onClickHandler(currentPageRef - 1)"
          >
            <slot name="prevBtn">Prev</slot>
          </component>
          <component
            v-else
            is="a"
            :class="[
              pageLinkClass,
              { disabled: currentPageRef === 1 || disablePagination },
            ]"
            :href="
              navigationHandler(currentPageRef - 1 ? currentPageRef - 1 : 1)
            "
            @click.prevent="onClickHandler(currentPageRef - 1)"
          >
            <slot name="prevBtn">Prev</slot>
          </component>
        </li>
      </template>

      <!-- Next page -->
      <template v-else-if="item === 'next'">
        <li :class="[pageItemClass, nextBtnClass]">
          <component
            v-if="type === 'button'"
            is="button"
            :class="pageLinkClass"
            :disabled="currentPageRef === pagesCount || disablePagination"
            @click.prevent="onClickHandler(currentPageRef + 1)"
          >
            <slot name="nextBtn">Next</slot>
          </component>
          <component
            v-else
            is="a"
            :class="[
              pageLinkClass,
              { disabled: currentPageRef === pagesCount || disablePagination },
            ]"
            :href="
              navigationHandler(
                currentPageRef < pagesCount ? currentPageRef + 1 : pagesCount
              )
            "
            @click.prevent="onClickHandler(currentPageRef + 1)"
          >
            <slot name="nextBtn">Next</slot>
          </component>
        </li>
      </template>

      <!-- Last page -->
      <template v-else-if="item === 'last'">
        <li :class="[pageItemClass, lastBtnClass]">
          <component
            v-if="type === 'button'"
            is="button"
            :class="pageLinkClass"
            :disabled="currentPageRef === pagesCount || disablePagination"
            @click.prevent="onClickHandler(pagesCount)"
          >
            <slot name="lastBtn">&raquo;</slot>
          </component>
          <component
            v-else
            is="a"
            :class="[
              pageLinkClass,
              { disabled: currentPageRef === pagesCount || disablePagination },
            ]"
            :href="navigationHandler(pagesCount)"
            @click.prevent="onClickHandler(pagesCount)"
          >
            <slot name="lastBtn">&raquo;</slot>
          </component>
        </li>
      </template>

      <!-- Starting ellipsis -->
      <template v-else-if="item === 'start-ellipsis'">
        <li :class="[pageItemClass, startEllipsisClass]">
          <div :class="ellipsisClass">
            <slot name="ellipsisText">...</slot>
          </div>
        </li>
      </template>

      <!-- Ending ellipsis -->
      <template v-else-if="item === 'end-ellipsis'">
        <li :class="[pageItemClass, endEllipsisClass]">
          <div :class="ellipsisClass">
            <slot name="ellipsisText">...</slot>
          </div>
        </li>
      </template>

      <!-- Pages -->
      <template v-else>
        <li :class="[pageItemClass, numberBtnClass]">
          <component
            v-if="type === 'button'"
            is="button"
            :class="[
              pageLinkClass,
              currentPageRef === Number(item) ? activeClass : '',
            ]"
            :disabled="disablePagination"
            @click.prevent="() => onClickHandler(Number(item))"
          >
            <span>{{ item }}</span>
          </component>
          <component
            v-else-if="['of', 'standard'].includes(paginationTypes)"
            is="dev"
            :class="[
              pageLinkClass,
              currentPageRef === Number(item) ? activeClass : '',
            ]"
            :disabled="disablePagination"
          >
            <span>{{ item }}</span>
          </component>
          <component
            v-else
            is="a"
            :class="[
              pageLinkClass,
              currentPageRef === Number(item) ? activeClass : '',
              { disabled: disablePagination },
            ]"
            :href="navigationHandler(Number(item))"
            @click.prevent="() => onClickHandler(Number(item))"
          >
            <span>{{ item }}</span>
          </component>
        </li>
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { range } from "../Util";

// Properties
const props = defineProps({
  total: {
    type: Number,
    required: true,
    validator: (n: number) => n > 0,
  },
  perPage: {
    type: Number,
    default: 10,
    validator: (n: number) => n > 0,
  },
  currentPage: {
    type: Number,
    default: 1,
    validator: (n: number) => n > 0,
  },
  siblingCount: {
    type: Number,
    default: 1,
  },
  boundaryCount: {
    type: Number,
    default: 1,
  },
  clickHandler: {
    type: Function,
    default: () => {},
  },
  type: {
    type: String,
    default: "button",
    validator: (v: string) => ["link", "button"].includes(v),
  },
  linkUrl: {
    type: String,
    default: "#",
  },
  disablePagination: {
    type: Boolean,
    default: false,
  },
  pageContainerClass: {
    type: String,
    default: "pagination-container",
  },
  pageItemClass: {
    type: String,
    default: "page-item",
  },
  pageLinkClass: {
    type: String,
    default: "page-link",
  },
  activeClass: {
    type: String,
    default: "active",
  },
  ellipsisClass: {
    type: String,
    default: "pagination-ellipsis",
  },
  firstBtnClass: {
    type: String,
    default: "first-button",
  },
  lastBtnClass: {
    type: String,
    default: "last-button",
  },
  prevBtnClass: {
    type: String,
    default: "prev-button",
  },
  nextBtnClass: {
    type: String,
    default: "next-button",
  },
  startEllipsisClass: {
    type: String,
    default: "starting-ellipsis",
  },
  endEllipsisClass: {
    type: String,
    default: "ending-ellipsis",
  },
  numberBtnClass: {
    type: String,
    default: "number-button",
  },
  paginationTypes: {
    type: String,
    default: "normal",
    validator: (v: string) =>
      ["normal", "standard", "minimal", "of"].includes(v),
  },
  hidePrevButton: Boolean,
  hideNextButton: Boolean,
  showFirstButton: Boolean,
  showLastButton: Boolean,
});

const currentPageRef = ref(props.currentPage);
const pagesCount = computed(() => Math.ceil(props.total / props.perPage));
const startPages = range(1, Math.min(props.boundaryCount, pagesCount.value));
const endPages = range(
  Math.max(pagesCount.value - props.boundaryCount + 1, props.boundaryCount + 1),
  pagesCount.value
);

// Methods
const onClickHandler = (page: number) => {
  if (page === currentPageRef.value) return;

  if (page > pagesCount.value) return;

  if (page < 1) return;

  if (props.disablePagination) return;

  if (props.clickHandler) {
    currentPageRef.value = page;
    props.clickHandler(page);
  }
};

const navigationHandler = (page: number) => {
  if (props.type !== "link") return "";
  return props.linkUrl.replace("{page}", page.toString());
};

const itemList = computed(() => {
  const page = currentPageRef.value;
  const total = pagesCount.value;

  const siblingsStart = Math.max(
    Math.min(
      page - props.siblingCount,
      pagesCount.value - props.boundaryCount - props.siblingCount * 2 - 1
    ),
    props.boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      page + props.siblingCount,
      props.boundaryCount + props.siblingCount * 2 + 2
    ),
    endPages.length > 0 ? endPages[0] - 2 : pagesCount.value - 1
  );

  const generatedItemList: any = [];

  switch (props.paginationTypes) {
    case "normal":
      generatedItemList.push(
        ...[
          ...(props.showFirstButton ? ["first"] : []),
          ...(props.hidePrevButton ? [] : ["previous"]),
          ...startPages,
          ...(siblingsStart > props.boundaryCount + 2
            ? ["start-ellipsis"]
            : props.boundaryCount + 1 < pagesCount.value - props.boundaryCount
            ? [props.boundaryCount + 1]
            : []),
          ...range(siblingsStart, siblingsEnd),
          ...(siblingsEnd < pagesCount.value - props.boundaryCount - 1
            ? ["end-ellipsis"]
            : pagesCount.value - props.boundaryCount > props.boundaryCount
            ? [pagesCount.value - props.boundaryCount]
            : []),
          ...endPages,
          ...(props.hideNextButton ? [] : ["next"]),
          ...(props.showLastButton ? ["last"] : []),
        ]
      );
      break;

    case "standard":
      generatedItemList.push(
        ...[
          ...(props.hidePrevButton ? [] : ["previous"]),
          currentPageRef.value,
          ...(props.hideNextButton ? [] : ["next"]),
        ]
      );

      break;
    case "minimal":
      generatedItemList.push(
        ...[
          ...(props.hidePrevButton ? [] : ["previous"]),
          ...(props.hideNextButton ? [] : ["next"]),
        ]
      );

      break;
    case "of":
      generatedItemList.push(
        ...[
          ...(props.hidePrevButton ? [] : ["previous"]),
          page + " of " + total,
          ...(props.hideNextButton ? [] : ["next"]),
        ]
      );

      break;
  }

  return generatedItemList;
});
</script>

<style></style>
