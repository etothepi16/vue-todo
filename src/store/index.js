import Vue from "vue";
import Vuex from "vuex";
import { db } from "../main";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
    activeTodos: [],
    projects: [],
    selectedProject: "",
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_PROJECTS(state) {
      let projects = [];
      db.collection("projects")
        .where("userId", "==", state.user.uid)
        .get()
        .then(snapshot => {
          projects = [];
          snapshot.forEach(doc => {
            projects.push({ id: doc.id, ...doc.data() });
          });
          state.projects = projects;
        });
    },
    SET_SELECTED_PROJECT(state, id) {
      state.selectedProject = id;
      state.activeTodos = state.todos.filter(todo => todo.project === id);
    },
    SET_TODOS(state) {
      let todos = [];
      db.collection("todos")
        .where("userId", "==", state.user.uid)
        .orderBy("dueDate")
        .get()
        .then(snapshot => {
          todos = [];
          snapshot.forEach(doc => {
            todos.push({ id: doc.id, ...doc.data() });
          });
          state.todos = todos;
        });
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
      state.activeTodos.push(todo);
      db.collection("todos").add(todo);
    },
    DELETE_TODO(state, todo) {
      var todos = state.todos;
      var activeTodos = state.activeTodos;
      var id = todo.id;
      const newTodos = todos.filter(el => el.id !== todo.id);
      const newActiveTodos = activeTodos.filter(el => el.id !== todo.id);
      state.todos = newTodos;
      state.activeTodos = newActiveTodos;
      db.collection("todos")
        .doc(id)
        .delete();
      // todos.splice(todos.indexOf(todo), 1);
    },
    MARK_COMPLETE(state, todo) {
      var id = todo.id;
      let i = state.todos.findIndex(el => el.id === id);
      let el = state.todos[i];
      el.completed = !el.completed;
      state.todos[i] = el;
      db.collection("todos")
        .doc(id)
        .update({ completed: el.completed });
    },
    ADD_PROJECT(state, project) {
      state.projects.push(project);
      db.collection("projects").add(project);
    },
    DELETE_PROJECT(state, project) {
      let id = project.id;
      let projects = state.projects;
      const remaining = projects.filter(p => p.id !== project.id);
      state.projects = remaining;
      db.collection("projects")
        .doc(id)
        .delete();
    }
  },
  actions: {
    setTodos({ commit }) {
      commit("SET_TODOS");
    },
    setProjects({ commit }) {
      commit("SET_PROJECTS");
    },
    setSelectedProject({ commit }, id) {
      commit("SET_SELECTED_PROJECT", id);
    },
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    deleteTodo({ commit }, todo) {
      commit("DELETE_TODO", todo);
    },
    markComplete({ commit }, todo) {
      commit("MARK_COMPLETE", todo);
    },
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    addProject({ commit }, project) {
      commit("ADD_PROJECT", project);
    },
    deleteProject({ commit }, project) {
      commit("DELETE_PROJECT", project);
    }
  },
  getters: {
    getUser: state => state.user,
    getTodos: state => state.activeTodos,
    getProjects: state => state.projects,
    getSelectedProject: state => state.selectedProject
  }
});
