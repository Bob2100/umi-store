export default {
  "post /api/login": function (request, response, next) {
    const { username, password } = request.body;
    if (username === 'kaikeba' && password === '123') {
      response.json({
        code: 0,
        data: {
          token: 'kaikebaisgood',
          role: 'admin',
          balance: 1000,
          username: 'kaikeba'
        }
      });
    } else if (username === 'jerry' && password === '123') {
      response.json({
        code: 0,
        data: {
          token: 'kaikebaisgood',
          role: 'admin',
          balance: 100,
          username: 'jerry'
        }
      });
    } else {
      response.json({
        code: -1,
        msg: '用户名或密码错误'
      });
    }
  }
}