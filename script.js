function timeLineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            // start: "top 250%",
            end: "bottom -350%"
        }
    })

    tl
        .to("#center-img", {
            left: "50%",
            duration: 5,
            // stagger: .1,
            ease: Power1
        })
        .to("#circle #btm img", {
            scale: 1,
            rotate: "-180deg",
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "hello")
        .to("#circle #top img", {
            scale: 1,
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "hello")
        .to("#cimage img", {
            scale: "0",
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "hello")
        .to("#center-img h5", {
            opacity: 0,
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "hello")
        .to("#circle", {
            scale: .6,
            duration: 5,
            ease: Power1
        }, "hello")
        .to("#overlay>h1#gallery", {
            bottom: "-50%",
            duration: 3,
            ease: Power1
        }, "hello")
        .to("#gola", {
            top: "50%",
            scale: 2.5,
            duration: 4,
            ease: Power1
        }, "hello")
        .to("#gola", {
            opacity: 0,
            duration: 4,
            ease: Power1
        }, "hello2")
        .to("#smcircle", {
            scale: 0,
            duration: 8,
            ease: Power1
        }, "hello2")
        .to("#circle", {
            scale: 0,
            ease: Power1
        }, "hello2")
        .to("#overlay>h1#pf", {
            rotate: 0,
            delay: 2,
            duration: 2,
            bottom: "5%",
            ease: Power1,
        }, "hello2")
        .to("#pinkpart", {
            top: 0,
            duration: 5,
            ease: Power1,
        }, "hello3")
        .to("#pinkpart", {
            top: "-70%",
            duration: 4,
            ease: Power1,
        }, "hello4")
}
timeLineOne();


function timeLineTwo() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            scrub: 1,
            start: "top top",
            // markers: true,
            end: "bottom -250%",
            pin: true
        }
    })

    tl2
        .to(".circle", {
            top: "50%",
            stagger: .1,
            ease: Power1
        })
        .to(".circle", {
            left: "50%",
            stagger: .1,
            ease: Power1
        })
        .to(".pu", {
            scale: 0.8,
            stagger: .1,
            ease: Power1
        }, "al")
        .to(".pi", {
            scale: 0.8,
            stagger: .1,
            ease: Power1
        }, "al")
        .to(".pu", {
            scale: 10,
            stagger: .1,
            ease: Power1
        }, "all")
        .to(".nav h1", {
            color: "#fff",
            stagger: .1,
            ease: Power1
        }, "all")
        .to("#stop", {
            borderBottom: "1px solid transparent",
            stagger: .1,
            ease: Power1
        }, "all")
        .to(".pu", {
            background: "linear-gradient(to right, #d5a7b4, #d5a7b4, #b4aad5)",
            ease: Power1
        })
        .to("#stop h1", {
            left: "-260%",
            duration: 8,
            stagger: .1,
            ease: Power1
        }, "a")
        .to(".pu", {
            background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
            ease: Power1
        }, "a")
        .to("#sbtm #ptwo", {
            opacity: 0,
            duration: 3,
            ease: Power1
        },"a")
        .to("#sbtm #pone", {
            opacity: 1,
            delay: 2.5,
            duration: 3,
            ease: Power1
        }, "a")
        .to(".pp", {
            top: "0%",
            delay: -4,
            duration: 5,
            stagger: .8,
            ease: Power1
        })
        .to(".elem2", {
            left: "50%",
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "a2")
        .to(".elem1", {
            left: "50%",
            duration: 5,
            stagger: .1,
            ease: Power1
        }, "a2")
        .to(".elem1", {
            left: "25%",
            duration: 5,
            stagger: .1,
            ease: Power1
        })

}
timeLineTwo();