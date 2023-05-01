import { useState } from "react";

export function useDrawer(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openDrawer = () => setIsOpen(true);

  const closeDrawer = () => setIsOpen(false);

  return { isOpen, openDrawer, closeDrawer };
}
