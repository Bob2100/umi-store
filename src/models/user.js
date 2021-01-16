import Axios from "axios"

const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {
  token: '',
  role: '',
  username: '',
  balance: 0
}

function login(userInfo) {
  return Axios.post('/api/login', userInfo).then(response => response.data.data);
}

export default {
  namespace: 'user',
  state: userInfo,
  effects: {
    *login(action, { call, put }) {
      try {
        const userInfo = yield call(login, action.payload);
        if (code === 0) {
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          yield put({ type: 'init', payload: userInfo });
          alert('登录成功');
        }
      } catch (error) {
        // 登录失败
      }
    }
  },
  reducers: {
    init(state, action) {
      return action.payload;
    }
  }
}