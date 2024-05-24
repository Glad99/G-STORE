
import { TiArrowUp } from "react-icons/ti";

const ScrollToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="p-1 bg-slate-400 text-white rounded-xl text-2xl cursor-pointer hover:bg-slate-900" 
    >
      <TiArrowUp/>
    </button>
  );
};

export default ScrollToTopButton;
