import { addTask, updateTask, getListTasks, getTaskById, deleteTask } from "@/services/task.api";

const state = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
};

const getters = {
  getTasks: (state) => state.tasks,
  getTask: (state) => state.task,
  getLoading: (state) => state.loading,
  getError: (state) => state.error,
};

const mutations = {  
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  setTask(state, task) {
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
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks[index] = updatedTask;
    }
  },
  deleteTaskFromState(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
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
    } finally {
      commit('setLoading', false);
    }
  },

  // Update a task Selected 
  async updateTask({ commit }, { id, updatedData }) {
    commit('setLoading', true);
    try {
      const updatedTask = await updateTask(id, updatedData);
      commit('updateTaskInState', updatedTask);
    } catch (error) {
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
      commit('setTask', task);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
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
