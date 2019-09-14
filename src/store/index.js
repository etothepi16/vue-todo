import Vue from "vue";
import Vuex from "vuex";
import { db } from "../main";
import firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
    user: null
  },
  mutations: {
    SET_USER(state) {
      state.user = firebase.auth().currentUser;
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
      var newTodo = {
        id: todo.id,
        category: todo.category,
        completed: false,
        description: todo.description,
        dueDate: todo.dueDate,
        title: todo.title,
        userId: todo.userId
      };
      state.todos.push(newTodo);
    },
    EDIT_TODO(state, todo) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
      state.todos = todos;
      state.newTodo = todo;
    },
    DELETE_TODO(state, todo) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
    },
    MARK_COMPLETE(state, todo) {
      var todoIndex = state.todos.indexOf(todo);
      todoIndex.completed = !todoIndex.completed;
    }
  },
  actions: {
    setTodos({ commit }) {
      commit("SET_TODOS");
    },
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    editTodo({ commit }, todo) {
      commit("EDIT_TODO", todo);
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
    getTodos: state => state.todos
  }
});
