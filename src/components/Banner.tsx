import { FC } from "react";
import { Link } from "react-router-dom";

export type BannerProps = {
  heading: string,
  sub_heading: string,
  cta_text: string,
  cta_link: string,
  image_url?: string,
  is_image_on_left?: boolean
}

const Banner: FC<BannerProps> = ({
  heading,
  sub_heading,
  cta_text,
  cta_link,
  image_url,
  is_image_on_left = false
}) => {
  return (
    <div className="hero min-h-[calc(100vh-96px)] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src={image_url}
          className={`max-w-[240px] md:max-w-sm mask mask-squircle shadow-2xl ${is_image_on_left ? 'order-2' : ''}`}
        />
        <div className={`text-center lg:text-left ${is_image_on_left ? 'order-1' : ''}`}>
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6 text-2xl">{sub_heading}</p>
          <Link to={cta_link} className="btn btn-primary">
            {cta_text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
