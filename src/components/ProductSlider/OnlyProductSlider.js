import Link from "next/link";
import { IoIosFlash } from "react-icons/io";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Swiper, { SwiperSlide } from "../swiper";
import { getDiscountPrice } from "../../lib/product";
import ProductGridFive from "../ProductThumb/ProductGridFive";

const params = {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pagination: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
};

const ProductSliderNine = ({ title, products }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  return (
    <div className="product-slider-area space-pb--r100">
      <div className="custom-container">
        <Row>
          <Col xl={12} lg={12}>
            <div className="section-title section-title--style-two heading-s1 d-flex justify-content-between align-items-center space-mb--30">
              <h4>{title}</h4>
              <Link href="/products" className="text-default">
                <IoIosFlash />
                View All
              </Link>
            </div>
            <div className="product-slider-wrap product-slider-wrap--custom-bullet">
              {!!products?.length ? (
                <Swiper options={params} navClass="prod-slider-nine">
                  {products.map((product) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);
                    const productPrice = product.price.toFixed(2);
                    const cartItem = cartItems.find(
                      (cartItem) => cartItem.id === product.id
                    );
                    const wishlistItem = wishlistItems.find(
                      (wishlistItem) => wishlistItem.id === product.id
                    );
                    const compareItem = compareItems.find(
                      (compareItem) => compareItem.id === product.id
                    );

                    return (
                      <SwiperSlide key={product.id}>
                        <ProductGridFive
                          product={product}
                          discountedPrice={discountedPrice}
                          productPrice={productPrice}
                          cartItem={cartItem}
                          wishlistItem={wishlistItem}
                          compareItem={compareItem}
                          bottomSpace="space-mb--30"
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : null}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductSliderNine;
