import { changeLanguageInterface, navBarMenuType } from "@/types/store.types";

const navReducer = {
  openMenu: (state: navBarMenuType) => {
    state.isOpen = true;
  },
  closeMenu: (state: navBarMenuType) => {
    state.isOpen = false;
  },
};

export default navReducer;
