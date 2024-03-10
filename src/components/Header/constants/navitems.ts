interface NavItems {
  id: number;
  title: string;
  link: string;
  auth: boolean
}

export const navitems: NavItems[] = [
  { id: 1, title: "Following", link: "/directory/following", auth: true },
  { id: 2, title: "Browse", link: "/directory", auth: false },
];
