import Marquee from "../lib/marquee";

export default (props: { children: JSX.Element[] }) => {
  return (
    <div className="relative flex w-full overflow-hidden max-w-9xl ">
      <Marquee
        pauseOnHover
        className="[--duration:30s] flex items-center space-x-0"
      >
        {props.children}
      </Marquee>
    </div>
  );
};
