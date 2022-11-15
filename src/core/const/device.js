
export const size = {
  mobile: 550,
  desktop: 1200
};

export const device = {
  mobile: `(max-width: ${size.mobile}px)`,
  laptop: `(min-width: ${size.mobile}px) and (max-width:${size.desktop}px)`,
  desktop: `(min-width: ${size.desktop}px)`
};

export const viewportDefaultState = {
  viewportWidth: 0,
  isMobile: 0,
  isLaptop: 0,
  isDesktop: 0,
  isCustom: 0
};
