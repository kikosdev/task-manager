import { addTask, updateTask, getListTasks, getTaskById, deleteTask } from "@/services/task.api";

const state = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
};

const getters = {
  getTasks: (state) => state.tasks,
  getTaskByID: (state) => state.task,
  getLoading: (state) => state.loading,
  getError: (state) => state.error,
};

const mutations = {  
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  setTaskSelected(state, task) {
    state.task = task;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.error = error;
  },
  addTaskToState(state, task) {
    state.tasks.push(task);
  },
  updateTaskInState(state, updatedTask) {
    const index = state.tasks.findIndex((task) => task._id === updatedTask.id);
    if (index !== -1) {
      state.tasks[index] = updatedTask;
    }
  },
  deleteTaskFromState(state, taskId) {
    state.tasks = state.tasks.filter((task) => task._id !== taskId);
  },

};

const actions = {
  // get list of tasks
  async fetchTasks({ commit }) {
    commit('setLoading', true);
    try {
      const tasks = await getListTasks();
      commit('setTasks', tasks);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
  },

  // Created a new task 
  async addTask({ commit }, taskData) {
    commit('setLoading', true);
    try {
      const newTask = await addTask(taskData);
      commit('addTaskToState', newTask);
    } catch (error) {
      commit('setError', error);
      throw error;
    } finally {
      commit('setLoading', false);
    }
  },

  // Update a task Selected 
  async modifyTask({ commit }, updatedData) {
    commit('setLoading', true);
    try {
      const updatedTask = await updateTask( updatedData);
      commit('updateTaskInState', updatedTask);
    } catch (error) {
      console.log(`error store ${error}`);
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
  },
  // get a task by id 
  async fetchTaskById({ commit }, taskId) {
    commit('setLoading', true);
    try {
      const task = await getTaskById(taskId);
      commit('setTaskSelected', task);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
  },

  selectedTask({ commit }, task) {
    commit('setTaskSelected', task);
  },
  
  // Delete Task by ID
  async deleteTask({ commit }, taskId) {
    commit('setLoading', true);
    try {
      await deleteTask(taskId);
      commit('deleteTaskFromState', taskId);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
  },
};

export default {
  state,
  actions,
  getters,
  mutations
};
