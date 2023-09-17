const isActivePage = (pathName: string, href: string) => {
  const itemHref =
    href !== import.meta.env.BASE_URL && import.meta.env.PROD
      ? `${href}/`
      : href;

  return pathName === itemHref;
};

export { isActivePage };