import Vue from "vue";
import Vuex from "vuex";
import { db } from "../main";
import firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
    activeTodos: [],
    projects: [],
    selectedProject: "Inbox",
    user: null
  },
  mutations: {
    SET_USER(state) {
      state.user = firebase.auth().currentUser;
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
    SET_SELECTED_PROJECT(state, name) {
      state.selectedProject = name;
      state.activeTodos = state.todos.filter(todo => todo.project === name);
    },
    SET_TODOS(state) {
      let todos = [];
      db.collection("todos")
        .where("userId", "==", state.user.uid)
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
    }
  },
  actions: {
    setTodos({ commit }) {
      commit("SET_TODOS");
    },
    setProjects({ commit }) {
      commit("SET_PROJECTS");
    },
    setSelectedProject({ commit }, name) {
      commit("SET_SELECTED_PROJECT", name);
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
    setUser({ commit }) {
      commit("SET_USER");
    }
  },
  getters: {
    getUser: state => state.user,
    getTodos: state => state.activeTodos,
    getProjects: state => state.projects,
    getSelectedProject: state => state.selectedProject
  }
});
