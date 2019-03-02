import React from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import { IonApp, IonContent } from "@ionic/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AboutForm } from "./components/about-form";
import { LoginForm } from "./components/login-form";

class App extends React.PureComponent {
  render() {
    return (
      <IonApp>
        <IonContent>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/login/">Login</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/about/" component={AboutForm} />
              <Route path="/login/" component={LoginForm} />
            </div>
          </Router>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
