import { useEffect, useRef, useState } from "react";
import { reviews } from "../../constants/index";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LucideProps } from "lucide-react";
import { useWindowSize } from "../../hooks/useWindowSize";
import type { Swiper as SwiperType } from "swiper";
import "./TestimonialSection.css";

interface SocialLink {
  id: number;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  url: string;
}

interface Review {
  id: number;
  name: string;
  designation: string;
  review: string;
  stars: number;
  socialLinks: SocialLink[];
}

const TestimonialSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [sliderPerView, setSliderPerView] = useState<number>(3);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setSliderPerView(1);
    } else if (width < 1268) {
      setSliderPerView(2);
    } else {
      setSliderPerView(3);
    }
  }, [width]);

  return (
    <section className="testimonial-container">
      <div>
        <h1 className="testimonial-title">Reviews</h1>
        <p className="testimonial-text">
        En DevConnect, estamos orgullosos de ser la plataforma preferida por miles de profesionales de IT que han encontrado conexiones valiosas y oportunidades de crecimiento. Nuestros usuarios destacan la facilidad de uso, la precisión en los matches y la oportunidad de colaborar con otros expertos apasionados. No solo ayudamos a conectar, sino que también fomentamos una comunidad donde cada interacción puede llevar a un nuevo proyecto, una amistad o el próximo gran paso en tu carrera profesional.
        </p>
      </div>
      <div>
        <div className="testimonial-header">
          <p className="review-count">{reviews.length} total reviews</p>
          <div className="testimonial-navigation">
            <button
              className="testimonial-nav-button"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft />
            </button>
            <button
              className="testimonial-nav-button"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="testimonial-swiper">
          <Swiper
            spaceBetween={20}
            slidesPerView={sliderPerView}
            loop={true}
            autoplay={{ delay: 3000 }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {reviews.map((review: Review, index: number) => (
              <SwiperSlide key={index}>
                <SingleReview review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const SingleReview = ({ review }: { review: Review }) => {
  return (
    <div className="review-box">
      <div className="review-header">
        <div>
          <h6 className="review-name">{review.name}</h6>
          <p className="review-designation">{review.designation}</p>
        </div>
        <div className="review-social-links">
          {review.socialLinks.map((link: SocialLink, index: number) => (
            <a key={index} href={link.url} className="social-link">
              <link.icon strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
      <div className="review-stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={20}
            fill="currentColor"
            className={index < review.stars ? "star-filled" : "star-empty"}
          />
        ))}
      </div>
      <p className="review-text">{review.review}</p>
    </div>
  );
};

export default TestimonialSection;
