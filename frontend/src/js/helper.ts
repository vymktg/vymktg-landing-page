const isActivePage = (pathName: string, href: string) => {
  const itemHref = import.meta.env.PROD ? `${href}/` : href;

  return pathName === itemHref;
};

export { isActivePage };
