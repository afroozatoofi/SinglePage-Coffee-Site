import react, { Fragment, useState } from "react";

import CoffeeTable from "../Components/Showcases/CoffeeTable";

const App = () => {
  

  return (
    
      <Fragment>
        <section className="banner-area" id="home">
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-start">
              <div className="banner-content col-lg-12">
                <h1 className="text-right">
                  روز خود را با یک قهوه <br />
                  خوشمزه شروع کنید
                </h1>
                <a
                  href="#coffee"
                  className="primary-btn text-uppercase buy-btn"
                >
                  سفارش دهید
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="video-sec-area pb-100 pt-40" id="about">
          <div className="container">
            <div className="row justify-content-start align-items-center text-right">
              <div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
                <div className="overlay overlay-bg"></div>
                <a className="play-btn" href="#">
                  <img className="img-fluid" src="img/play-icon.png" alt="" />
                </a>
              </div>
              <div className="col-lg-6 video-left">
                <h6>لورم ایپسوم طرحی ساختگی</h6>
                <h1>
                  لورم ایپسوم طرحی ساختگی <br />
                  متن طراحی لورم ایپسوم
                </h1>
                <p>
                  <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </span>
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <img className="img-fluid" src="img/signature.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="menu-area section-gap" id="coffee">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">
                    چه قهوه ای میل دارین براتون سرو کنیم
                  </h1>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                </div>
              </div>
            </div>
            <CoffeeTable />
          </div>
        </section>

        <section className="gallery-area section-gap" id="gallery">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </h1>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <a href="img/g1.jpg" className="img-pop-home">
                  <img className="img-fluid" src="img/g1.jpg" alt="" />
                </a>
                <a href="img/g2.jpg" className="img-pop-home">
                  <img className="img-fluid" src="img/g2.jpg" alt="" />
                </a>
              </div>
              <div className="col-lg-8">
                <a href="img/g3.jpg" className="img-pop-home">
                  <img className="img-fluid" src="img/g3.jpg" alt="" />
                </a>
                <div className="row">
                  <div className="col-lg-6">
                    <a href="img/g4.jpg" className="img-pop-home">
                      <img className="img-fluid" src="img/g4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="img/g5.jpg" className="img-pop-home">
                      <img className="img-fluid" src="img/g5.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="review-area section-gap" id="review">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </h1>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 single-review">
                <img src="img/r1.png" alt="" />
                <div className="title d-flex flex-row">
                  <h4>لورم ایپسوم</h4>
                  <div className="star">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className="col-lg-6 col-md-6 single-review">
                <img src="img/r2.png" alt="" />
                <div className="title d-flex flex-row">
                  <h4>لورم ایپسوم</h4>
                  <div className="star">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
            <div className="row counter-row">
              <div className="col-lg-3 col-md-6 single-counter">
                <h1 className="counter">2536</h1>
                <p>مشتری ها راضی</p>
              </div>
              <div className="col-lg-3 col-md-6 single-counter">
                <h1 className="counter">7562</h1>
                <p>کل محصولات</p>
              </div>
              <div className="col-lg-3 col-md-6 single-counter">
                <h1 className="counter">2013</h1>
                <p>فنجون قهوه</p>
              </div>
              <div className="col-lg-3 col-md-6 single-counter">
                <h1 className="counter">10536</h1>
                <p>تعداد کل</p>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area section-gap" id="blog">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </h1>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 single-blog">
                <img className="img-fluid" src="img/b1.jpg" alt="" />
                <ul className="post-tags">
                  <li>
                    <a href="#">سفر</a>
                  </li>
                  <li>
                    <a href="#">سبک زندگی</a>
                  </li>
                </ul>
                <a href="#">
                  <h4>لورم ایپسوم طراحان ساختگی نامفهوم</h4>
                </a>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
                <p className="post-date">10 فروردین 1398</p>
              </div>
              <div className="col-lg-6 col-md-6 single-blog">
                <img className="img-fluid" src="img/b2.jpg" alt="" />
                <ul className="post-tags">
                  <li>
                    <a href="#">سفر</a>
                  </li>
                  <li>
                    <a href="#">سبک زندگی</a>
                  </li>
                </ul>
                <a href="#">
                  <h4>لورم ایپسوم طراحان ساختگی نامفهوم</h4>
                </a>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
                <p className="post-date">10 فروردین 1398</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
  );
};

export default App;
