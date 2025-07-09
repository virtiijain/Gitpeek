import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return {
    isOpen,
    toggleMenu,
    closeMenu: () => setIsOpen(false),
  };
}
