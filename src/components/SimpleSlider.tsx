import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";

interface SliderProps<T> {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const SimpleSlider = <T extends { id: string }>({
  dots = false,
  infinite = false,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  items,
  renderItem
}: SliderProps<T>) => {
  const sliderSettings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
  }
  return (
    <Slider {...sliderSettings}>
      {items.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}

    </Slider>
  );
}
export default SimpleSlider;