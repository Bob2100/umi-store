import Axios from "axios"

const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {
  token: '',
  role: '',
  username: '',
  balance: 0
}

function login(userInfo) {
  return Axios.post('/api/login', userInfo);
}

export default {
  namespace: 'user',
  state: userInfo,
  effects: {
    *login(action, { call, put }) {
      const { data: { code, data: userInfo } } = yield call(login, action.payload);
      if (code === 0) {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        yield put({ type: 'init', payload: userInfo });
        alert('登录成功');
      } else {
        alert('登录失败');
      }
    }
  },
  reducers: {
    init(state, action) {
      return action.payload;
    }
  }
}