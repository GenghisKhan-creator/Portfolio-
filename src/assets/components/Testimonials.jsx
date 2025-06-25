import { AnimatedTestimonials } from "./animated-testimonials";
import songsore from '/images/Songsore .JPG';
import sammy from '/images/sammy.jpg';
import aaron from '/images/aaron.JPG';
import caro from '/images/caro.jpg';
import george from '/images/george.png';
import boss from '/images/boss.jpg';

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Gideon is an exceptional full stack developer.  He is reliable, skilled, and always deliver work on time. It'been a pleasure working with you and I will highly recommend him.",
      name: "Caroline Teye",
      designation: "IT Business Analyst",
      src: caro,
    },
    {
      quote:
        "I highly recommend this brand. His exceptional service, including 24/7 monitoring and strategic recommendations, has significantly boosted my business's online presence and engagement. He's a reliable partner.",
      name: "Mulumba Ngmenlabagna Songsore",
      designation: "Executive Director at Necessary Aid Alliance Ghana",
      src: songsore,
    },
    {
      quote:
        "Gideon did an excellent job on my website. He was professional, fast, and delivered exactly what I needed. I'm very satisfied and would gladly recommend him to anyone looking for a skilled web developer.",
      name: "Aaron Gai",
      designation: "CEO at Wink Media",
      src: aaron,
    },
    {
      quote:
        "Gideon, a former developer intern at Tumu College of Education, is an exceptional software developer. He consistently demonstrated strong programming and problem-solving skills, significantly contributing to projects using various languages including JavaScript, Python, and C++. A quick learner who thrives in teams, Gideon made valuable contributions in debugging, feature implementation, and system testing. He'd be a valuable asset to any organization.",
      name: "Forkor Augustine",
      designation: "ICT Coordinator at Tumu College of Education",
      src: boss,
    },
    {
      quote:
        "Gideon is a forward-thinking technology practitioner specializing in programming and backend development. His project work demonstrates a strong grasp of current tech trends and their broader industry impact, making him an excellent collaborator for new ventures.",
      name: "George Beyuo",
      designation: "Information Systems Practitioner",
      src: george,
    },
    {
      quote:
        "Working with Gideon was a game changer. His clean code, problem-solving skills, and punctuality made him a true asset to our dev team and our project a success.",
      name: "Samuel Abankwa",
      designation: "A freelance Web Developer",
      src: sammy,
    },
    {
      quote:
        "Having worked alongside him on several projects, I've witnessed firsthand his professionalism and the exceptional value he brings to every endeavor. I wholeheartedly endorse his services.",
      name: "Kyere Ofosuhene",
      designation: "CEO at Planet Speaks, Ghana",
      src: boss,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
