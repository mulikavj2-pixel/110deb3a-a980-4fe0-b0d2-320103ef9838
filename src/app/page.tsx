"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function CoffeePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="mediumSizeExtraLargeTitles"
      background="plain"
      cardStyle="glass-outline-light"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811496067-y11xq838.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew Haven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Brew Your Perfect Moment"
          description="Discover exceptional coffee crafted with passion, served in a warm community space where every cup tells a story of quality and care."
          tag="Premium Coffee Experience"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811497626-ygiav8k9.jpg"
          imageAlt="Fresh brewed espresso coffee"
          frameStyle="card"
          metricsLabel="Loved by coffee enthusiasts and professionals"
          metrics={[
            {
              id: "1",
              value: "5k+",
              label: "Daily Visitors"
            },
            {
              id: "2",
              value: "15",
              label: "Years Brewing Excellence"
            },
            {
              id: "3",
              value: "100%",
              label: "Locally Sourced Beans"
            }
          ]}
          buttons={[
            {
              text: "View Menu",
              href: "menu"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Our Coffee Story"
          description="Founded in 2008, Brew Haven began as a passion project to bring specialty coffee culture to our community. We source beans directly from sustainable farms, roast them fresh daily, and craft each cup with meticulous attention. Our baristas aren't just employees—they're artists dedicated to perfecting your coffee experience. From the first espresso shot to the last sip, we believe in creating moments that matter."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811500055-igf4kn6p.jpg"
          imageAlt="Cozy coffee shop interior with warm lighting"
          imagePosition="right"
          useInvertedBackground="noInvert"
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "Schedule a Tour",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          products={[
            {
              id: "1",
              name: "Signature Espresso",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811501329-m43rtv1c.jpg",
              imageAlt: "Double shot espresso"
            },
            {
              id: "2",
              name: "Creamy Latte",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811502568-pvda52k0.jpg",
              imageAlt: "Latte with latte art"
            },
            {
              id: "3",
              name: "Fresh Pastry",
              price: "$6.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811503878-xkuryyg8.jpg",
              imageAlt: "Freshly baked pastry"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          title="Featured Menu Items"
          description="Explore our carefully curated selection of premium coffee beverages and fresh pastries"
          tag="Menu Highlights"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          buttons={[
            {
              text: "View Full Menu",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@coffeeaddict",
              testimonial: "The best coffee in town. Every visit feels like home. The baristas know my order and treat me like family.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811505311-d9g4i6j7.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@morningrituals",
              testimonial: "Consistently excellent quality. The attention to detail in every cup shows their passion for coffee.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811506440-zi42baz7.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@barista_dreams",
              testimonial: "A true specialty coffee experience. The ambiance and service make this my favorite coffee destination.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811507990-n7qp16fn.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Johnson",
              handle: "@coffee_explorer",
              testimonial: "Their single-origin selections are outstanding. I love discovering new flavors every week.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811509245-ysf2fjhm.jpg",
              imageAlt: "Michael Johnson"
            },
            {
              id: "5",
              name: "Lisa Anderson",
              handle: "@latteart_fan",
              testimonial: "Perfect spot for meetings or quiet work sessions. Great wifi, great coffee, great vibes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811510624-73ag1fs5.jpg",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",
              name: "David Wilson",
              handle: "@coffeesnob",
              testimonial: "Where sustainability meets exceptional taste. Supporting local farms has never tasted so good.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811512269-wl5o2btu.jpg",
              imageAlt: "David Wilson"
            }
          ]}
          animationType="slide-up"
          title="What Coffee Lovers Say"
          description="Real stories from our community of passionate coffee enthusiasts"
          tag="Customer Reviews"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={30}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardNine
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Head Barista & Co-Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811513604-dgqf22cn.jpg",
              imageAlt: "Marco Rossi"
            },
            {
              id: "2",
              name: "Sofia Chen",
              role: "Coffee Roaster & Quality Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811514728-g56aof35.jpg",
              imageAlt: "Sofia Chen"
            },
            {
              id: "3",
              name: "Thomas Weber",
              role: "Café Manager & Community Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811515896-rfu1bxx2.jpg",
              imageAlt: "Thomas Weber"
            }
          ]}
          title="Meet Our Coffee Artisans"
          description="The passionate team behind every perfect cup"
          tag="Our Team"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday 6 AM to 8 PM, Saturday 7 AM to 9 PM, and Sunday 7 AM to 7 PM. We're closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer dairy-free options?",
              content: "Yes! We have oat, almond, soy, and coconut milk alternatives available for all our beverages at no extra charge."
            },
            {
              id: "3",
              title: "Can I order online or for pickup?",
              content: "You can call us to pre-order for pickup, or simply walk in. We're working on launching our online ordering platform soon."
            },
            {
              id: "4",
              title: "Do you have free WiFi?",
              content: "Absolutely! We offer complimentary high-speed WiFi for all our customers. Just ask for the password at the counter."
            },
            {
              id: "5",
              title: "Do you host events or private bookings?",
              content: "Yes, we can accommodate small meetings and events. Please contact us at info@brewhaven.com or call 555-0142 to discuss your needs."
            },
            {
              id: "6",
              title: "Where do you source your coffee beans?",
              content: "We partner directly with sustainable farms across Colombia, Ethiopia, and Peru. All our beans are ethically sourced and freshly roasted in-house."
            }
          ]}
          title="Frequently Asked Questions"
          description="Everything you need to know about Brew Haven"
          tag="FAQ"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions or want to visit us? Reach out and we'll brew up an answer for you."
          useInvertedBackground="noInvert"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what you'd like to know about our coffee or menu...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765811496067-y11xq838.jpg"
          logoAlt="Coffee Shop Logo"
          columns={[
            {
              title: "Location",
              items: [
                {
                  label: "123 Coffee Street, Downtown",
                  href: ""
                },
                {
                  label: "Hours: Mon-Fri 6AM-8PM",
                  href: ""
                },
                {
                  label: "Sat 7AM-9PM, Sun 7AM-7PM",
                  href: ""
                },
                {
                  label: "info@brewhaven.com",
                  href: ""
                }
              ]
            },
            {
              title: "Quick Links",
              items: [
                {
                  label: "Home",
                  href: "hero"
                },
                {
                  label: "Menu",
                  href: "menu"
                },
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Follow Us",
              items: [
                {
                  label: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com"
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Brew Haven. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}