const isActivePage = (url: URL, href: string) => {
  const pathName = url.pathname.split('/')[1];

  const itemHref =
    href !== import.meta.env.BASE_URL && import.meta.env.PROD
      ? `${href}/`
      : href;

  if (!pathName) {
    if (itemHref === '/') {
      return true;
    }

    return false;
  }

  return itemHref.includes(pathName);
};

export { isActivePage };