import { useEffect } from "react";
import Link from "next/link";

const MobileCategoryMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-category-menu__navigation"
    );
    const offCanvasNavSubMenu =
      offCanvasNav.querySelectorAll(".mobile-sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-category-menu__navigation"
    >
      <ul>
        <li>
          <Link href="/category/rf-cannulas">RF Cannulas</Link>
        </li>
        <li>
          <Link href="/category/rf-electrodes">RF Electrodes</Link>
        </li>
        <li>
          <Link href="/category/epidurals">Epidurals</Link>
        </li>
        <li>
          <Link href="/category/spinal-needles">Spinal Needles</Link>
        </li>
        <li>
          <Link href="/category/gloves">Gloves</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileCategoryMenuNav;
