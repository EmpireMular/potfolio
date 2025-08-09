import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600"/></div>,
    title: "Website Design",
    description:
      "We build fully responsive website that look great on all devices. Our website are design to convert visitors into customers.",
    link: "#website-design",
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600"/></div>,
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
    link: "#ecommerce-store",
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600"/></div>,
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app, we use the latest technology to keep your data safe.",
    link: "#authentication",
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600"/></div>,
    title: "Social Media",
    description:
      "We offer social media management and ad creation services, we can help you grow your social madia presence and reach new customers.",
    link: "#social-media",
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600"/></div>,
    title: "App Development",
    description:
      "We build customer mobile apps for IOS and Android. Our apps are designed to be user-friendly and performant.",
    link: "#app-development",
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600"/></div>,
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
    link: "#support",
  },
];
