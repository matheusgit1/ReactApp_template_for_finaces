import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import Home from "../themes/Home";//pagina inicial
//import SignUp1 from "../themes/signup1";//assinar canal
import ResetPassword from "../themes/resetPassword";//reiniciar senha
import ChangePassword from "../themes/changePassword";//alterar senha
import NotFound from "../themes/404";//-pagina errada
import Funcionarios from "../themes/Employee";//funcioonarios
import Receitas from "../themes/Recipes";//receitas
import Ativos from "../themes/Active";//ativos
import Depositos from "../themes/Deposits";//depositos
import Saques from "../themes/Looting";//saques
import Promocoes from "../themes/Promotions";//promoções
import Servicos from "../themes/Services";//serviços
import Destaques from "../themes/Highlights";//destaques
import Precos from "../themes/Prices";//preços
import Estoques from "../themes/Stocks";//estoques
import Equipe from "../themes/Team";//equipe
import Contatos from "../themes/Contacts";//contatos
import Relatorios from "../themes/Reports";//realatorios
import HeroSectionLogin1 from "../components/HeroSection/HeroSectionLogin1";

//adicionar serviço de assinatura<Route exact path="/signup1" component={SignUp1} >

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>   
            <Switch>             
                <Route exact path="/" component={Home} />         
                <Route exact path="/resetPassword" component={ResetPassword} />
                <Route exact path="/changePassword" component={ChangePassword} />
                <Route exact path="/404" component={NotFound} />
                <Route exact path="/Funcionarios" component={Funcionarios} />
                <Route exact path="/Receitas" component={Receitas} />
                <Route exact path="/Ativos" component={Ativos} />
                <Route exact path="/Depositos" component={Depositos} />
                <Route exact path="/Saques" component={Saques} />
                <Route exact path="/Promocoes" component={Promocoes} />
                <Route exact path="/Servicos" component={Servicos} />
                <Route exact path="/Destaques" component={Destaques} />
                <Route exact path="/Precos" component={Precos} />
                <Route exact path="/Estoques" component={Estoques} />
                <Route exact path="/Equipe" component={Equipe} />
                <Route exact path="/Contatos" component={Contatos} />
                <Route exact path="/Relatorios" component={Relatorios} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
