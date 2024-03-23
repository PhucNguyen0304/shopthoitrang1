import { useEffect, useRef, useState } from "react";
import { logo } from "../../assets/index";
import { navData } from "../../constant";

const scrollIntoViewWithOffset = (selector, offset) => {
  window.scrollTo({
    behavior: "smooth",
    top:
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
};

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState(0);
  const previousPage = useRef(-1);
  useEffect(() => {
    previousPage.current = currentPage;
  }, [currentPage]);
  return (
    <>
      <div className="cotainer navigation sticky-top ">
        <nav className="navbar navbar-expand-md border-bottom ">
          <div className="container-fluid border-highlight border-1">
            <a href="#" className="navbar-brand">
              <img
                src={logo}
                alt="logo"
                style={{ width: "75px", height: "75px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse align-self-center"
              id="menu"
            >
              <ul className="navbar-nav menu mx-auto">
                {navData.map(({ id, link, content }) => (
                  <li
                    key={id}
                    onClick={() => {
                      setCurrentPage(id);
                      scrollIntoViewWithOffset("#" + link, 100);
                    }}
                    className="nav-item text-uppercase"
                  >
                    <a
                      className={
                        currentPage == id ? "nav-link highlight" : "nav-link"
                      }
                    >
                      {content}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        <div className="icon">
          <div className="icon-shop ">
            <span className="stock">0&nbsp;</span>
            <i className="bi bi-cart-fill "></i>
          </div>
        </div>
        </nav>
      </div>
    </>
  );
}
