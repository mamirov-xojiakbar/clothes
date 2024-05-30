// store.js
import { reactive } from "vue";

export const state = reactive({
  showCategories: false,
});

export const toggleCategories = () => {
  state.showCategories = !state.showCategories;
};
