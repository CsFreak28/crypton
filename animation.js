import gsap from "gsap";
const titles = document.querySelectorAll(".bigtitle");
const navLinks = document.querySelectorAll(".navlink");
const secondSetLinks = document.querySelectorAll(".secondSetLinks");
console.log(titles);
export function animate() {
  const tl = gsap.timeline();
  const anotherTl = gsap.timeline();
  tl.from(titles, 1, {
    y: "200px",
    stagger: 0.3,
    ease: "power2.out",
  });
  anotherTl
    .from(navLinks, 1, {
      x: "-100px",
      delay: 0.2,
      ease: "power3.out",
      stagger: 0.2,
    })
    .from(secondSetLinks, 1, {
      x: "100px",
      ease: "power3.out",
      stagger: 0.3,
    });
}
