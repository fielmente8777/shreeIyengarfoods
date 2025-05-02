"use client";
import Link from "next/link";
import { Container } from "../sectionComponent";
import { imageUrl, NavLink } from "@/utils/data/links";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FillSwiggy, FillZomato } from "@/utils/icons/icons";
const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="max-w-[1600px] mx-auto w-full bg-bg1 py-2">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="">
            <Link
              href="#"
              className="relative h-[6rem] w-[8rem] aspect-auto block"
            >
              <Image
                src={imageUrl + "logo.webp"}
                alt="shree iyengars logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
          <div className="flex items-center gap-12">
            <ul className="lg:flex hidden items-center gap-12">
              {NavLink.slice(1, NavLink.length).map((link) => (
                <li key={link.id} className="">
                  <Link
                    href={link.href}
                    className={`${pathname === link.href ? "border-b border-primary" : ""} capitalize text-dark text-base w-fit description2 hover:border-b border-primary transition-all duration-300 ease-in-out`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="https://www.swiggy.com/menu/496479?source=sharing"
                  target="_blank"
                  className="flex w-[34px] rounded-sm aspect-square bg-ternory border border-ternory text-white items-center justify-center hover:bg-white hover:text-ternory"
                >
                  <FillSwiggy />
                  <span className="sr-only">Swiggy</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://link.district.in/DSTRKT/drestpage?res_id=19777044"
                  className="flex px-2 py-[4.5px] rounded-sm bg-ternory border border-ternory text-white items-center justify-center hover:bg-white hover:text-ternory"
                >
                  <FillZomato />
                  <span className="sr-only">Zomato</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
      {/* <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </header>
  );
};

export default Navbar;
