import React from "react";
import _data from "../../data";

class Funcionarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMember: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      teamMember: _data.teamMember,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="team-member-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="section-heading text-center mb-4">
                  <h2></h2>
                  <p className="lead">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-4.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Produto</h5>
                    <h6>resumo</h6>
                    <ul /*className="list-inline team-social social-icon my-4 text-white">
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-github"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-dribbble"></span>
                        </a>
                      </li>
                    </ul*//>
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-4.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Produto</h5>
                    <h6>resumo</h6>
                    <ul /*className="list-inline team-social social-icon my-4 text-white">
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-github"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-dribbble"></span>
                        </a>
                      </li>
                    </ul*//>
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-4.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Produto</h5>
                    <h6>resumo</h6>
                    <ul /*className="list-inline team-social social-icon my-4 text-white">
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-github"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-dribbble"></span>
                        </a>
                      </li>
                    </ul*//>
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-4.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Produto</h5>
                    <h6>resumo</h6>
                    <ul /*className="list-inline team-social social-icon my-4 text-white">
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-github"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-dribbble"></span>
                        </a>
                      </li>
                    </ul*//>
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-4.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Produto</h5>
                    <h6>resumo</h6>
                    <ul /*className="list-inline team-social social-icon my-4 text-white">
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-github"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-dribbble"></span>
                        </a>
                      </li>
                    </ul*//>
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-team-member position-relative my-lg-3 my-md-3 my-sm-0">
                  <div className="team-image">
                    <img
                      src="img/team-4.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Produto</h5>
                    <h6>resumo</h6>
                    <ul /*className="list-inline team-social social-icon my-4 text-white">
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-github"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="">
                          <span className="ti-dribbble"></span>
                        </a>
                      </li>
                    </ul*//>
                    <a
                      href="singleTeam"
                      target="_blank"
                      className="btn app-store-btn"
                    >
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <nav className="custom-pagination-nav mt-4">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="/#">
                          <span className="ti-angle-left"></span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="">
                          <span className="ti-angle-right"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>         
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Funcionarios;
