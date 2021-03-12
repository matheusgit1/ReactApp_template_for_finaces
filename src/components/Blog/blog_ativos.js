import React, { Component } from "react";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className="our-blog-section ptb-10 gray-light-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="section-heading mb-5">
                  <h2></h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-primary">
                    Imoveis
                  </span>
                  <img
                    src="img/blog/1.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item"></li>
                        <li className="list-inline-item">
                          <span></span>
                        </li>
                        <li className="list-inline-item">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="">Imoveis</a>
                    </h3>
                    <p className="card-text">
                      Imoveis propriedades da empresa
                    </p>
                    <a href="" className="detail-link">
                      Detalhes <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-danger">
                    Veiculos
                  </span>
                  <img
                    src="img/blog/2.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item"></li>
                        <li className="list-inline-item">
                          <span></span> 
                        </li>
                        <li className="list-inline-item">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="">Veiculos</a>
                    </h3>
                    <p className="card-text">
                      Veiculos da empresa
                    </p>
                    <a href="/#" className="detail-link">
                      Detalhes <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-info">
                    Estoques
                  </span>
                  <img
                    src="img/blog/3.jpg"
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item"></li>
                        <li className="list-inline-item">
                          <span></span> 
                        </li>
                        <li className="list-inline-item">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="">Estoques</a>
                    </h3>
                    <p className="card-text">
                      Estoques da empresa{" "}
                    </p>
                    <a href="" className="detail-link">
                      Detalhes <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div /*className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-primary">
                    Ativos
                  </span>
                  <img
                    src="img/blog/4.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item"></li>
                        <li className="list-inline-item">
                          <span></span> 
                        </li>
                        <li className="list-inline-item">
                          <span></span> 
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="">Ativos</a>
                    </h3>
                    <p className="card-text">
                      Ativos propriedades da empresa
                    </p>
                    <a href="/#" className="detail-link">
                      Detalhes <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-danger">
                    Recebidos
                  </span>
                  <img
                    src="img/blog/5.jpg"
                    className="card-img-top position-relative"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item"></li>
                        <li className="list-inline-item">
                          <span></span> 
                        </li>
                        <li className="list-inline-item">
                          <span></span> 
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="">Recibos</a>
                    </h3>
                    <p className="card-text">
                      Receitas vindas de recibos (boletos, prestações, carnê)
                    </p>
                    <a href="/#" className="detail-link">
                      Detalhes <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-blog-card card border-0 shadow-sm">
                  <span className="category position-absolute badge badge-pill badge-info">
                    Science
                  </span>
                  <img
                    src="img/blog/6.jpg"
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className="card-body">
                    <div className="post-meta mb-2">
                      <ul className="list-inline meta-list">
                        <li className="list-inline-item"></li>
                        <li className="list-inline-item">
                          <span></span>
                        </li>
                        <li className="list-inline-item">
                          <span></span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="h5 card-title">
                      <a href="">A receber</a>
                    </h3>
                    <p className="card-text">
                      Receitas a receber{" "}
                    </p>
                    <a href="" className="detail-link">
                      Detalhes <span className="ti-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div*//>
            </div>

            <div className="row">
              <div className="col-md-12">
                <nav className="custom-pagination-nav mt-4">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="">
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
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
