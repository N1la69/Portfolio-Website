import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const prj1Ref = useRef(null);
  const prj2Ref = useRef(null);
  const prj3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const projects = [prj1Ref.current, prj2Ref.current, prj3Ref.current];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: (index + 1) * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={prj1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="prj1" />
            </div>
            <div className="text-content">
              <h2>Project 1 title</h2>
              <p className="text-white-50 md:text-xl">Proj. 1 description</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper">
            <div className="project" ref={prj2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="prj2" />
              </div>
              <h2>Project 2 title</h2>
            </div>

            <div className="project" ref={prj3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="prj3" />
              </div>
              <h2>Project 3 title</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
