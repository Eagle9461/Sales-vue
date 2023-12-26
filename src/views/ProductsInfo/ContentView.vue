<template>
  <div>
  </div>  
  <TopHeader>
    <SearchInput @response="txt => searchItem = txt" placeholder="Search.." />
  </TopHeader>
  <div>
    <TextInput @response="txt => insertData = { title: txt }" label="Title" />
    <TextInput @response="txt => insertData = { brand: txt }" label="Brand"/>
  </div>
    

  <h4>Products Information</h4>

  <EasyDataTable 
    v-model:items-selected="itemsSelected" 
    :headers="headers" 
    :items="items"
    table-class-name="customize-table"
  >
    <template #loading>
      <img src="https://thumbs.gfycat.com/AngelicYellowIberianmole.webp" style="width: 60px; height: 100px" />
    </template>
    <template #header-title="{text}">
      <!-- <div @click="visible=!visible">{{ text }}</div> -->
      Title
      <!-- <SearchDropdown title="Title" @response="(txt: string) => searchItem = txt"/> -->
    </template>
    <template #item-title="{ title, id }">
      <a :href="dLink + id" class="link">{{ title }}</a>
    </template>
    <template>

    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import type { Ref } from 'vue';
import type { Header, Item } from "vue3-easy-data-table";
import SearchInput from "../../components/Input/SearchInput.vue";
import TextInput from "../../components/Input/TextInput.vue"
import SearchDropdown from "../../components/Dropdown/SearchDown.vue"
import TopHeader from "@/components/TopHeader.vue";
// import { mockClientItems } from "../mock";

const dLink = ref("http://localhost:5173/details/");
const itemsSelected = ref([]);
const items: Ref<Item[]> = ref([])
const searchItem = ref("");

const insertData: Ref<Object> = ref({
  title: '',
  brand: ''
})

const visible:Ref<boolean> = ref(false);

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
  { text: "Title", value: "title", fixed: true, width: 200, }, // set fixed to true
  { text: "Category", value: "category", fixed: true, width: 100 }, // set fixed to true
  { text: "Brand", value: "brand", width: 200,  },
  { text: "Price", value: "price", width: 200 },
  { text: "Stock", value: "stock", width: 200 },
  { text: "Rating", value: "rating", width: 200 },
];


</script>

<style>
.customize-table {
  padding: 30px 0 0 0;
  --easy-table-row-border: 1px solid #F2F2F2;
  --easy-table-border: 0px;
  --easy-table-header-item-padding: 10px 15px;
  --easy-table-body-item-padding: 10px 15px;
  --easy-table-body-item-padding: 10px 15px;
}
.customize-table table tr td{
  border: none;
  /* border-bottom: 1px solid #F2F2F2; */
}

</style>

<style scoped>
.invisible{
  display: none;
}
.link{
  color: #0B63F8;
}
</style>