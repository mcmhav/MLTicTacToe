import { Platform } from 'react-native';

export const TAB_BAR_HEIGHT = 56;
// export const NAV_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.TotalNavHeight;

export const NAV_BAR_HEIGHT = Platform.select({
  ios: 64,
  android: 54,
});

export const defaultSpace = 16;

const layout = {
  tinyPaddingTop: {
    paddingTop: 4,
  },
  tinyPaddingBottom: {
    paddingBottom: 4,
  },
  smallPadding: {
    padding: 8,
  },
  smallPaddingTop: {
    paddingTop: 8,
  },
  smallPaddingBottom: {
    paddingBottom: 8,
  },
  defaultPadding: {
    padding: defaultSpace,
  },
  defaultPaddingTop: {
    paddingTop: defaultSpace,
  },
  defaultPaddingBottom: {
    paddingBottom: defaultSpace,
  },
  defaultPaddingLeft: {
    paddingLeft: defaultSpace,
  },
  defaultPaddingRight: {
    paddingRight: defaultSpace,
  },
  navbarMargin: {
    marginTop: NAV_BAR_HEIGHT,
  },
  navbarPadding: {
    paddingTop: NAV_BAR_HEIGHT,
  },
  tabbarPadding: {
    paddingBottom: TAB_BAR_HEIGHT,
  },
  defaultMargin: {
    margin: defaultSpace,
  },
  defaultMarginBottom: {
    marginBottom: defaultSpace,
  },
  defaultMarginLeft: {
    marginLeft: defaultSpace,
  },
  defaultMarginRight: {
    marginRight: defaultSpace,
  },
  gridMargin: {
    margin: 2,
  },
  defaultTextfieldHeight: {
    height: 28,
  },
  listBorderWidthBottom: {
    borderBottomWidth: 2,
  },
  fabPositionBottom: {
    bottom: TAB_BAR_HEIGHT + defaultSpace,
  },
  fabPositionRight: {
    right: defaultSpace,
  },
};

export default layout;
