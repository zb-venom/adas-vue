// import {http} from '../../scripts/http';

const state = {
    _id: null,
    login: null,
    uCode: null,
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
};

const getters = {
    _id: state => {
        return state.playlist;
    },
    login: state => {
        return state.play;
    },
    uCode: state => {
        return state.hash;
    }
};
  
const mutations = {
    set_id: (state, payload) => {
        state.playlist = payload;
    },
    setLogin: (state, payload) => {
        state.play = payload;
    },
    setUCode: (state, payload) => {
        state.hash = payload;
    }
};

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions,
};