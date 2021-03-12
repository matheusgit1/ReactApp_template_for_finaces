import { Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Route,Redirect , withRouter} from "react-router-dom";
import { login } from "../../actions/index";
import _data from '../../data';
import Routes from '../../routers';
class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      __user: "",
      __password: "",
      valid_login: "",
      user: {},
      hero: {},
      disableBtn: false,
      btnText: "Acessar",
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkUser = this.checkUser.bind(this);

  }

  checkUser(__user,__password){
    if((__user == _data.allowed_users.user_1.user && __password == _data.allowed_users.user_1.password)
      || (__user == _data.allowed_users.user_2.user && __password == _data.allowed_users.user_2.password)
      || (__user == _data.allowed_users.user_3.user && __password == _data.allowed_users.user_3.password))
      {
        return true;
      }
      else{
        return false;
      }
  }


  changeBtnText = btnText => {
    this.setState({ btnText });
  };

  componentDidMount(e){
    this.setState({
      user: _data.allowed_users,
    });
  }

  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  handleSubmit(event) {
    event.preventDefault();

    // disable the button
    this.setState({ disableBtn: true });

    // // get action
    const loginAction = login(this.state);

    // // Dispatch the contact from data
    this.props.dispatch(loginAction);

    // // added delay to change button text to previous
    setTimeout(
      function() {
        // enable the button
        this.setState({ disableBtn: false });

        // change to button name
        this.changeBtnText("Acessar");

        // get action again to update state
        const loginAction = login(this.state);

        // Dispatch the contact from data
        this.props.dispatch(loginAction);

        // clear form data
        this.setState({
         __user: "",
         __password: ""
        });
      }.bind(this),
      3000
    );
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <Formik>
          <section
            className="hero-section ptb-100 background-img full-screen"
            style={{
              backgroundImage: "url('img/hero-bg-1.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
                <div className="col-md-7 col-lg-6">
                  <div className="hero-content-left text-white">
                    <h1 className="text-white">Bem vindo de volta!</h1>
                    <p className="lead">
                      Matenha suas tarefas sempre em dia!
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5">
                  <div className="card login-signup-card shadow-lg mb-0">
                    <div className="card-body px-md-5 py-5">
                      <div className="mb-5">
                        <h5 className="h3">Login</h5>
                        <p className="text-muted mb-0">
                          
                        </p>
                      </div>

                      <form
                        className="login-signup-form"
                        method="post"
                        onSubmit={this.handleSubmit}
                      >
                        <div className="form-group">
                          <label className="pb-1">Usuario</label>
                          <div className="input-group input-group-merge">
                            <div className="input-icon">
                              <span className="ti-email color-primary"></span>
                            </div>
                            <input
                              value={this.state.__user}
                              onChange={e =>
                                this.handleFormValueChange("__user", e)
                              }
                              type="text"
                              name="user"
                              className="form-control"
                              placeholder="usuario"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col">
                              <label className="pb-1">Senha</label>
                            </div>
                            <div className="col-auto">
                              <a
                                href="password-reset.html"
                                className="form-text small text-muted"
                              >
                                Esqueceu sua senha?
                              </a>
                            </div>
                          </div>
                          <div className="input-group input-group-merge">
                            <div className="input-icon">
                              <span className="ti-lock color-primary"></span>
                            </div>
                            <input
                              value={this.state.__password}
                              onChange={e =>
                                this.handleFormValueChange("__password", e)
                              }
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Senha"
                              required
                            />
                          </div>
                        </div>
                        <div className="col align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">{this.state.valid_login}</div>
                        <button
                          className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                          id="signIn"
                          disabled={this.state.disableBtn}
                          onClick={() => {
                            if(this.checkUser(this.state.__user, this.state.__password)){
                              this.changeBtnText("Logando...");
                              
                            }
                            else{
                              let state = this.state;
                              state.valid_login = "usuario ou senha incorretos";
                              this.setState(state);
                            }
                          }}
                        >
                          {this.state.btnText}
                        </button>
                      </form>
                    </div>                 
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-img-absolute">
              <img
                src="img/hero-bg-shape-1.svg"
                alt="wave shape"
                className="img-fluid"
              />
            </div>
          </section>
        </Formik>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state,
}))(HeroSection);
