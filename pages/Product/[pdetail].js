import "remixicon/fonts/remixicon.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { data, images } from "../data";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
export const getStaticPaths = () => {
  const paths = data.map((post) => {
    return {
      params: {
        pdetail: post.id.toString(),
      },
    };
  });
  return {
    paths,

    fallback: true,
  };
};
export const getStaticProps = (context) => {
  const path = context.params.pdetail;
  const pdata = data.filter((post) => {
    if (post.id.toString() == path) return post;
  });

  console.log(path);
  return {
    props: {
      pdata,
    },
  };
};
const ProductDetail = ({ pdata }) => {
  return (
    <>
      <SeoHead title="Machinery Page" />
      <Layout>
        <div className="cardmain pt-24">
          <div className="card__title">
            <div className="icon">
              <Link href="/">
                <i className="ri-arrow-left-s-line"></i>
              </Link>
            </div>
            <h3>Machinery Type</h3>
          </div>

          <div className="bodyhead">
            <div className="card__body">
              <div className="half">
                <div className="featured_text">
                  <h1>{pdata[0].name}</h1>
                  <p className="sub">{pdata[0].category}</p>
                  {/* <p className="price">₹{pdata[0].prize}</p> */}
                </div>
                <div className="image">
                  <Carousel
                    autoPlay
                    interval={2500}
                    infiniteLoop
                    showArrows={false}
                    showStatus={false}
                  >
                    {pdata[0].images &&
                      pdata[0].images.map((i) => (
                        <img
                          src={i.url}
                          key={i.id}
                          alt="image not found"
                          style={{ maxWidth: "50%" }}
                        />
                      ))}
                  </Carousel>
                </div>
              </div>
              <div className="half">
                <div className="description">
                  <p>{pdata[0].description}</p>
                </div>
                <span className="stock">Order now!!</span>
                <br />

                <div className="reviews">
                  <ul className="stars">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-half-s-line"></i>
                    </li>
                  </ul>
                  <span>(64 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <div className="recommend">
              <p>By</p>
              <h3>Ace International</h3>
            </div>
            <div className="action">
              <a href="https://wa.me/+91?text=Hi%20I'm%20interested%20for%20opting%20for%20this%20services">
                <button type="button">Contact now</button>
              </a>
            </div>
          </div>
        </div>
        <br />
      </Layout>
    </>
  );
};

export default ProductDetail;
