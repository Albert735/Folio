import React from "react";

const Cursor = () => {
  const secondaryCursor = React.useRef(null);
  const mainCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
      }
    };
    followMouse();
  }, []);

  return (
    <>
      <div
        ref={mainCursor}
        data-cursor-dot
        className="cursor-dot h-[15px] w-[15px] bg-[#f3efe2] fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-full z-10 pointer-events-none"
      ></div>
      <div
        ref={secondaryCursor}
        data-cursor-outline
        className="cursor-outline h-[60px] w-[60px] border border-[#f3efe2] fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-full z-10 pointer-events-none"
      ></div>
    </>
  );
};

export default Cursor;
