import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import BannerOne from "../../assets/images/banner-any-1.jpg"
import BannerTwo from "../../assets/images/banner-any-2.jpg"
import BannerThree from "../../assets/images/banner-any-3.jpg"
import BannerFour from "../../assets/images/banner-any-4.png"
const CarouselPage = () => {
  return (
    <div>
      <MDBCarousel
        activeItem={1}
        length={4}
        // showControls={true}
        // showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={BannerThree}
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption className="text-left">
              <div class="camera_target_content">
                <div class="cameraContents">
                  <div class="cameraContent cameracurrent">
                    {/* <div class="container">
                      <h4 class="wow fadeInUp">
                        Help Shape the Future of Education in Remakri
                      </h4>
                      <h1 class="wow fadeInUp">Perfect Education Courses</h1>
                      <p class="wow fadeInUp">
                        New skills and knowledge can spark a lifetime of change.
                        For 60 years, Education Development <br /> Center (EDC),
                        has designed and delivered programs in education, health
                      </p>
                      <a href="#" class="wow fadeInLeft  theme-solid-button">
                        Get Started
                      </a>
                      <a
                        href="course-v1.html"
                        class="wow fadeInRight  theme-line-button"
                      >
                        Courses
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={BannerThree}
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <div class="camera_target_content">
                <div class="cameraContents">
                  <div class="cameraContent cameracurrent">
                    {/* <div class="container">
                      <h4 class="wow fadeInUp">
                        Help Shape the Future of Education in Remakri
                      </h4>
                      <h1 class="wow fadeInUp">Perfect Education Courses</h1>
                      <p class="wow fadeInUp">
                        New skills and knowledge can spark a lifetime of change.
                        For 60 years, Education Development <br /> Center (EDC),
                        has designed and delivered programs in education, health
                      </p>
                      <a href="#" class="wow fadeInLeft  theme-solid-button">
                        Get Started
                      </a>
                      <a
                        href="course-v1.html"
                        class="wow fadeInRight  theme-line-button"
                      >
                        Courses
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={BannerThree}
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <div class="camera_target_content">
                <div class="cameraContents">
                  <div class="cameraContent cameracurrent">
                    {/* <div class="container">
                      <h4 class="wow fadeInUp">
                        Help Shape the Future of Education in Remakri
                      </h4>
                      <h1 class="wow fadeInUp">Perfect Education Courses</h1>
                      <p class="wow fadeInUp">
                        New skills and knowledge can spark a lifetime of change.
                        For 60 years, Education Development <br /> Center (EDC),
                        has designed and delivered programs in education, health
                      </p>
                      <a href="#" class="wow fadeInLeft  theme-solid-button">
                        Get Started
                      </a>
                      <a
                        href="course-v1.html"
                        class="wow fadeInRight  theme-line-button"
                      >
                        Courses
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={BannerThree}
                alt="Mattonit's item"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption className="text-left">
              <div class="camera_target_content">
                <div class="cameraContents">
                  <div class="cameraContent cameracurrent">
                    {/* <div class="container">
                      <h4 class="wow fadeInUp">
                        Help Shape the Future of Education in Remakri
                      </h4>
                      <h1 class="wow fadeInUp">Perfect Education Courses</h1>
                      <p class="wow fadeInUp">
                        New skills and knowledge can spark a lifetime of change.
                        For 60 years, Education Development <br /> Center (EDC),
                        has designed and delivered programs in education, health
                      </p>
                      <a href="#" class="wow fadeInLeft  theme-solid-button">
                        Get Started
                      </a>
                      <a
                        href="course-v1.html"
                        class="wow fadeInRight  theme-line-button"
                      >
                        Courses
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default CarouselPage;
