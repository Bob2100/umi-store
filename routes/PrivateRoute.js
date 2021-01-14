import Redirect from "umi/redirect";


export default props => {
  if (!localStorage.getItem('userInfo')) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location.pathname } // 传递重定向地址
        }}
      />
    );
  }
  return (
    <div>
      {props.children}
    </div>
  );
};
