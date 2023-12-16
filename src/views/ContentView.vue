<template>
  <SearchInput @response="txt => searchItem = txt" />
  <span style="color:red">{{ searchItem }}</span>
  <h4>Products Information</h4>

  <EasyDataTable v-model:items-selected="itemsSelected" :headers="headers" :items="items">
    <template #loading>
      <img
        src="https://thumbs.gfycat.com/AngelicYellowIberianmole.webp"
        style="width: 60px; height: 100px"
      />
    </template>
    <template #item-title="{ title, id }">
      <a :href="dLink+id">{{ title }}</a>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import type { Ref } from 'vue';
import type { Header, Item } from "vue3-easy-data-table";
import SearchInput from "../components/Input/SearchInput.vue";
// import { mockClientItems } from "../mock";

const dLink = ref("http://localhost:5173/details/");
const itemsSelected = ref([]);
const items: Ref<Item[]> = ref([])
const searchItem = ref("");
watch(searchItem, (newTxt: any) => {
  search();
})


const search = () => {
  fetch('https://dummyjson.com/products/search?q=' + searchItem.value)
    .then(res => res.json())
    .then(res => {
      items.value = res.products
    });
}

onMounted(() => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
      items.value = res.products;
    })
})

const headers: Header[] = [
  { text: "Title", value: "title", fixed: true, width: 200, sortable: true }, // set fixed to true
  { text: "Category", value: "category", fixed: true, width: 100 }, // set fixed to true
  { text: "Brand", value: "brand", width: 200, sortable: true },
  { text: "Price", value: "price", width: 200 },
  { text: "Stock", value: "stock", width: 200 },
  { text: "Rating", value: "rating", width: 200 },
];


</script>

<style scoped></style>