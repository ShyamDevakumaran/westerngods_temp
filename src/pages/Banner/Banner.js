import React, { Fragment, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../redux/thunks/master";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  const dispatch = useDispatch();
  const { bannerList } = useSelector((state) => state.masterReducer);
//   console.log(bannerList);
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);
  return (
    <div>
      <section className="bg-grey-50">
        <div className="w-full h-full  ">
          <div
            id="default-carousel"
            className="relative w-full h-full"
            data-carousel="static"
          >
            <div className="relative  overflow-hidden  md:h-full">
              <Carousel
                // autoPlay={true}
                // interval={3000}
                // transitionTime={500}
                // showIndicators={false}
                // showThumbs={false}
                // infiniteLoop={true}
                // showStatus={false}
                // stopOnHover={false}
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                autoPlay={6000}
                infiniteLoop={true}
                interval={3000}
                transitionTime={500}
                stopOnHover={false}
              >
                {bannerList?.map((land, index) => (
                  <a key={land.banner_id}>
                    <Fragment>
                      <LazyLoadImage
                        // effect="blur"
                        alt={`${`landscape_ad` + index}`}
                        src={land.banner_img}
                        width="100%"
                      />
                    </Fragment>
                  </a>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
