import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className={"navbar navbar-expand-lg fixed-top " + (this.props.bgColor && this.props.bgColor === 'white' ? 'custom-nav white-bg' : 'bg-transparent')}>
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={this.props.bgColor && this.props.bgColor === 'white' ? "img/logo-color-1x.png" : "img/logo-white-1x.png"}
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ti-menu"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link page-scroll dropdown-toggle"
                      href="/#"
                      id="navbarDropdownHome"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Painel Adminstrativo
                    </a>
                    <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarDropdownHome"
                    >
                      <a className="dropdown-item" href="Funcionarios">
                        Funcionario
                      </a>
                      <a className="dropdown-item" href="Receitas">
                        Receitas
                      </a>
                      <a className="dropdown-item" href="Ativos">
                        Ativos
                      </a>
                      <a className="dropdown-item" href="Depositos">
                        Depositos
                      </a>
                      <a className="dropdown-item" href="Saques">
                        Saques
                      </a>
                      <a className="dropdown-item" href="Promocoes">
                        Promoções
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="Servicos">
                      Serviços
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="Destaques">
                      Destaques
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="Precos">
                      Preços
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="Estoques">
                      Estoques
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link page-scroll dropdown-toggle" href="pricing" id="navbarDropdownPage" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Social
                      </a>
                      <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarDropdownHome"
                      >
                        <a className="dropdown-item" href="https://www.instagram.com/ap_matheus/">
                          Instagram (Desenvolvedor)
                        </a>
                        <a className="dropdown-item">
                          Facebook
                        </a>
                        <a className="dropdown-item">
                          Whatsapp
                        </a>
                        <a className="dropdown-item">
                          PickPay
                        </a>
                      </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="Equipe">
                      Equipe
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="Contatos">
                      Contatos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="Relatorios">
                      Relatorios
                    </a>
                    <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarDropdownHome"
                    >
                      <a className="dropdown-item" href="Relatorios">
                        Geral
                      </a>
                      <a className="dropdown-item" href="Relatorios">
                        Semanal
                      </a>
                      <a className="dropdown-item" href="Relatorios">
                        Mensal
                      </a>
                      <a className="dropdown-item" href="Relatorios">
                        Diario
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn btn-light btn-lg font-weight-light" href="">
                      Sair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Header);
