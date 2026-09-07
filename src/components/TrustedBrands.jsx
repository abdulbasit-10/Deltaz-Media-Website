import React, { useEffect, useRef } from "react";

import devflowLogo from "../assets/Devflow.png";
import godaddyLogo from "../assets/Godaddy.png";
import shahnawarLogo from "../assets/Shahnawar.png";
import encovaLogo from "../assets/Encova Solutions.png";
import hubspotLogo from "../assets/Hubspot.png";
import metaLogo from "../assets/Meta.png";
import shopifyLogo from "../assets/Shopify.png";
import wordpressLogo from "../assets/Wordpress.png";
import googleLogo from "../assets/Google.png";

const logos = [
  { name: "Devflow", image: devflowLogo },
  { name: "GoDaddy", image: godaddyLogo },
  { name: "WordPress", image: wordpressLogo },
  { name: "Shahnawar", image: shahnawarLogo },
  { name: "Encova Solutions", image: encovaLogo },
  { name: "HubSpot", image: hubspotLogo },
  { name: "Meta", image: metaLogo },
  { name: "Shopify", image: shopifyLogo },
  { name: "HubSpot", image: hubspotLogo },
  { name: "Google", image: googleLogo },
  { name: "Meta", image: metaLogo },
  { name: "WordPress", image: wordpressLogo },
  { name: "Google", image: googleLogo },
  { name: "WordPress", image: wordpressLogo },
];

const BOX_WIDTH = 153;
const BOX_HEIGHT = 60;

const GAP = 7;
const ROW_GAP = 7;

const SPEED = 80;

// Extra invisible area used for smooth row transitions
const TRANSITION = BOX_WIDTH;

function TrustedBrands() {
  const containerRef = useRef(null);
  const boxesRef = useRef([]);
  const animationRef = useRef(null);

  const distanceRef = useRef(0);
  const lastTimeRef = useRef(null);
  const widthRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const calculateLayout = () => {
      widthRef.current = container.clientWidth;
    };

    const updatePositions = () => {
      const width = widthRef.current;

      if (!width) return;

      const step = BOX_WIDTH + GAP;

      /*
        Each box travels through this complete cycle:

        TOP ROW
        ------------------------>
                                  \
                                   \
        BOTTOM ROW
        ------------------------>
                                  \
                                   \
        TOP ROW again

        The row change happens outside the visible screen.
      */

      const visibleWidth = width;

      const cycleLength =
        visibleWidth +
        TRANSITION +
        visibleWidth +
        TRANSITION;

      boxesRef.current.forEach((box, index) => {
        if (!box) return;

        let position =
          index * step + distanceRef.current;

        position = position % cycleLength;

        let x;
        let y;

        /*
          PHASE 1
          Top row moving right
        */
        if (position < visibleWidth) {
          x = position;
          y = 0;
        }

        /*
          PHASE 2
          Top → Bottom transition
          Completely outside the visible area
        */
        else if (position < visibleWidth + TRANSITION) {
          const progress =
            (position - visibleWidth) / TRANSITION;

          x = visibleWidth + progress * BOX_WIDTH;
          y = progress * (BOX_HEIGHT + ROW_GAP);
        }

        /*
          PHASE 3
          Bottom row moving right
        */
        else if (
          position <
          visibleWidth +
            TRANSITION +
            visibleWidth
        ) {
          const bottomPosition =
            position -
            visibleWidth -
            TRANSITION;

          x = bottomPosition;
          y = BOX_HEIGHT + ROW_GAP;
        }

        /*
          PHASE 4
          Bottom → Top transition
          Also completely outside the visible area
        */
        else {
          const progress =
            (position -
              visibleWidth -
              TRANSITION -
              visibleWidth) /
            TRANSITION;

          x = visibleWidth + progress * BOX_WIDTH;
          y =
            BOX_HEIGHT +
            ROW_GAP -
            progress * (BOX_HEIGHT + ROW_GAP);
        }

        box.style.transform = `
          translate3d(
            ${x}px,
            ${y}px,
            0
          )
        `;
      });
    };

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta =
        (time - lastTimeRef.current) / 1000;

      lastTimeRef.current = time;

      distanceRef.current += SPEED * delta;

      updatePositions();

      animationRef.current =
        requestAnimationFrame(animate);
    };

    calculateLayout();
    updatePositions();

    const resizeObserver =
      new ResizeObserver(() => {
        calculateLayout();
        updatePositions();
      });

    resizeObserver.observe(container);

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      lastTimeRef.current = null;
    };
  }, []);

  return (
    <section
      id="partners"
      className="
        relative
        h-[470px]
        w-full
        overflow-hidden
        bg-[#071F22]
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[560px]
          flex-col
          items-center
          text-center
          pt-[61px]
        "
      >
        <div
          className="
            flex
            items-center
            gap-[7px]
            font-['Inter']
            text-[10px]
            font-medium
            leading-none
            text-[#C5D1D2]
          "
        >
          <span className="flex items-center">
            <span className="h-[13px] w-[13px] rounded-full bg-[#08737D]" />
            <span className="-ml-[7px] h-[13px] w-[13px] rounded-full bg-[#1AA1AE]" />
          </span>

          <span>Our Partners</span>
        </div>

        <h2
          className="
            mt-[20px]
            font-['Manrope']
            text-[30px]
            font-bold
            leading-[1.08]
            tracking-[-1.2px]
            text-[#F3F7F7]
          "
        >
          Trusted by Leading That
          <br />
          Drive Digital{" "}
          <span className="text-[#18D0E4]">
            Brands
          </span>
        </h2>

        <p
          className="
            mt-[19px]
            max-w-[500px]
            font-['Inter']
            text-[9px]
            font-normal
            leading-[1.35]
            text-[#8EA5A6]
          "
        >
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore
          <br />
          et dolore magna aliqua.
        </p>
      </div>

      <div
        ref={containerRef}
        className="
          absolute
          left-0
          right-0
          top-[242px]
          z-10
          h-[134px]
          overflow-hidden
        "
      >
        {logos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            ref={(el) => {
              boxesRef.current[index] = el;
            }}
            className="
              absolute
              left-0
              top-0
              flex
              h-[60px]
              w-[153px]
              items-center
              justify-center
              rounded-[6px]
              border
              border-[#8FCFD3]
              bg-[#D7F0F1]
              shadow-[0_1px_3px_rgba(0,0,0,0.18)]
              will-change-transform
            "
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="
                max-h-[44px]
                max-w-[125px]
                object-contain
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBrands;