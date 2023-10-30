import type { ServiceBackgroundEnum } from "./enum";

export interface TestimonialInterface {
  company_name: string;
  name: string;
  position: string;
  comment: string;
  company_logo: string;
  avatar: string;
}

export interface ServiceItemInterface {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  service_detail: Array<ServiceItemInterface>;
  testimonial: TestimonialInterface;
  background: ServiceBackgroundEnum;
  image_name: string;
}