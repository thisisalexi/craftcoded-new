import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
                {/* logo  */}
                <Link href="/">
                <img src="/assets/craftc.png" alt="" width={100}/>
                {/* <h1 className="text-4xl font-semibold">
                   Logo <span className="text-accent">.</span>
                </h1> */}
              </Link>
               


            {/* desktop nav and hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
            <div className="xl:hidden fixed right-5">
              <MobileNav />
            </div>
        </div>
    </header>
  );
};

export default Header;