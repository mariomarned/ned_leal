export const Colors = {
  magenta: '#C4227D',
  yellow: '#FFE700',
  lightGray: '#F0F0F0', // Assuming a light gray for text input backgrounds
  white: '#FFFFFF',
  black: '#000000',
};

export const Fonts = {
  nunito: 'Nunito',
  altoSans: 'Alto Sans',
};

export const FontSizes = {
  h1: 43,
  h2: 24,
  h3: 20,
  body: 16,
  small: 14,
};

export const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const BorderRadius = {
  small: 5,
  medium: 10,
  large: 25,
};

export const GlobalStyles = {
  textInput: {
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.small,
    padding: Spacing.medium,
    fontSize: FontSizes.body,
    fontFamily: Fonts.nunito,
  },
  button: {
    backgroundColor: Colors.magenta,
    borderRadius: BorderRadius.large,
    padding: Spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSizes.body,
    fontFamily: Fonts.nunito,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: Fonts.altoSans,
    fontWeight: 'black',
    lineHeight: 35,
    textAlign: 'center',
    marginBottom: Spacing.large,
    fontSize: FontSizes.h1,
    color: Colors.black,
  },
  h1: {
    fontSize: FontSizes.h1,
    fontFamily: Fonts.altoSans,
    fontWeight: 'bold',
    color: Colors.black,
  },
  h2: {
    fontSize: FontSizes.h2,
    fontFamily: Fonts.altoSans,
    fontWeight: 'bold',
    color: Colors.black,
  },
  h3: {
    fontSize: FontSizes.h3,
    fontFamily: Fonts.altoSans,
    fontWeight: 'bold',
    marginBottom: Spacing.medium,
    color: Colors.black,
  },
  bodyText: {
    fontSize: FontSizes.body,
    fontFamily: Fonts.nunito,
    color: Colors.black,
  },
};