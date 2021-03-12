import React from "react";
import _data from "../../data";

class TeamMember extends React.Component {
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
        <section className="team-single-section ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-sm-12 col-lg-5">
                <div className="team-single-img">
                  <img
                    src="img/team-1.jpg"
                    alt="member"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="team-single-text">
                  <div className="team-name mb-4">
                    <h4 className="mb-1">FUNCIONARIO</h4>
                    <span>Função</span>
                  </div>
                  <ul className="team-single-info">
                    <li>
                      <strong>telefone:</strong>
                      <span> phone</span>
                    </li>
                    <li>
                      <strong>Email:</strong>
                      <span> email</span>
                    </li>
                  </ul>
                  <div className="text-content mt-20">
                    <p>
                      Resumo
                    </p>
                    <p>
                      Resumo
                    </p>
                    <p>
                      Resumo
                    </p>
                  </div>
                  <ul className="team-social-list list-inline mt-4">
                    <li className="list-inline-item">
                      <a href="" className="color-primary">
                        <span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="" className="color-primary">
                        <span className="ti-instagram"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="" className="color-primary">
                        <span className="ti-dribbble"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="" className="color-primary">
                        <span className="ti-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div /*className="row mt-5">
              <div className="col-md-6 col-sm-6 col-12">
                <div className="section-heading">
                  <h5>Atividades e Habilidades</h5>
                  <div className="section-heading-line-left"></div>
                </div>
                <ul className="list-unstyled">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-primary mr-3">
                          <span className="ti-check"></span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          habilidade
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-primary mr-3">
                          <span className="ti-check"></span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          habilidade
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-primary mr-3">
                          <span className="ti-check"></span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          habilidade
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="badge badge-primary mr-3">
                          <span className="ti-check"></span>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0">
                          habilidade
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div /*className="col-md-6 col-sm-6 col-12">
                <div className="section-heading mt-40">
                  <h5>Habilidades Profissionais</h5>
                  <div className="section-heading-line-left"></div>
                </div>
                <div className="mt-3">
                  <div className="progress-item">
                    <div className="progress-title">
                      <h6>
                        Habilidade
                        <span className="float-right">
                          <span className="progress-number">60</span>%
                        </span>
                      </h6>
                    </div>
                    <div className="progress p-1">
                      <span style={{ width: "60%" }}>
                        <span className="progress-line"></span>
                      </span>
                    </div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-title">
                      <h6>
                        Habilidade
                        <span className="float-right">
                          <span className="progress-number">80</span>%
                        </span>
                      </h6>
                    </div>
                    <div className="progress p-1">
                      <span style={{ width: "80%" }}>
                        <span className="progress-line"></span>
                      </span>
                    </div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-title">
                      <h6>
                        Habilidade
                        <span className="float-right">
                          <span className="progress-number">50</span>%
                        </span>
                      </h6>
                    </div>
                    <div className="progress p-1">
                      <span style={{ width: "50%" }}>
                        <span className="progress-line"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div*//>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TeamMember;
