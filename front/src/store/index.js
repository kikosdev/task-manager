import { createStore } from "vuex";
import taskStore from "./modules/task.store";

export default createStore({
  modules: {
    taskStore
    // Add more modules as needed
  },
});
