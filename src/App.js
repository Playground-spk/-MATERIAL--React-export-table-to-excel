import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import { allowRoute } from "./config/role";
import { connect } from "react-redux";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App(props) {
  console.log(props.role);
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {allowRoute[props.role].allow.map((route) => {
            return (
              <Route
                exact
                path={route.path}
                name={route.path}
                render={(props) => <route.component {...props} />}
              />
            );
          })}
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.user.role,
  };
};

export default connect(mapStateToProps, null)(App);

// class App extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <React.Suspense fallback={loading}>
//           <Switch>
//             <Route
//               exact
//               path="/login"
//               name="Login Page"
//               render={(props) => <Login {...props} />}
//             />
//             <Route
//               exact
//               path="/register"
//               name="Register Page"
//               render={(props) => <Register {...props} />}
//             />
//             <Route
//               exact
//               path="/404"
//               name="Page 404"
//               render={(props) => <Page404 {...props} />}
//             />
//             <Route
//               exact
//               path="/500"
//               name="Page 500"
//               render={(props) => <Page500 {...props} />}
//             />
//             <Route
//               path="/"
//               name="Home"
//               render={(props) => <TheLayout {...props} />}
//             />
//           </Switch>
//         </React.Suspense>
//       </HashRouter>
//     );
//   }
// }

// export default App;
