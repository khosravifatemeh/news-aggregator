import { useState } from "react";
import { useNavItems } from "../../hooks/layout/useNavItems";
import NavbarContent from "./NavbarContent";
import NavbarDrawer from "./NavbarDrawer";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = useNavItems();

  return (
    <>
      <NavbarContent navItems={navItems} setMobileOpen={setMobileOpen} />
      <NavbarDrawer
        navItems={navItems}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
    </>
  );
};

export default Navbar;
