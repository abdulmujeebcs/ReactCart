import { BannerProps as OriginalBannerProps } from "../components/Banner";

interface BannerProps extends OriginalBannerProps {
  id: string;
}

export const BANNERS: BannerProps[] = [
  {
    heading: "BREAKFAST PIZZA",
    sub_heading: "EGGZA - Crazy Value!",
    cta_link: "/",
    cta_text: "SHOP NOW",
    image_url: "images/hero.webp",
    id: "f438d4e6-9b8c-49f5-9740-e513c0fecce7",
  },
  {
    heading: "THE BEST STUFFED CRUST",
    sub_heading: "PIZZA",
    cta_link: "/",
    cta_text: "SUMMER DEAL",
    image_url: "images/pizzas/bbq-chicken.webp",
    id: "044dbc0d-aae9-415d-877a-cc3da8f5a9f3",
  },
  {
    heading: "ENJOY PIZZA PARTY",
    sub_heading: "NEW SUMMER DEAL - 5 PERSONS MEAL",
    cta_link: "/",
    cta_text: "BUY NOW",
    image_url: "images/pizzas/prosciutto.webp",
    id: "22f02922-7957-45a5-bef4-c8d86e867bf8",
    is_image_on_left: true
  },
];
