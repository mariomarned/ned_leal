export const Colors = {
  magenta: '#C4227D',
  yellow: '#FFE700',
  lightGray: '#F0F0F0', // Assuming a light gray for text input backgrounds
  white: '#FFFFFF',
  black: '#000000',
  primary: '#C4227D', // Añadido para consistencia con otros archivos
  accent: '#FFE700', // Añadido para consistencia con otros archivos
  textGray: '#666666', // Añadido para consistencia con otros archivos
};

export const Fonts = {
  nunito: 'Nunito',
  altoSans: 'Alto Sans',
  regular: 'Nunito-Regular', // Añadido para consistencia con otros archivos
  bold: 'Nunito-Bold', // Añadido para consistencia con otros archivos
  light: 'Nunito-Light', // Añadido para consistencia con otros archivos
};

export const FontSizes = {
  h1: 32,
  h2: 24,
  h3: 18,
  body: 16,
  medium: 16, // Añadido para resolver el error
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
  screenContainer: { // Añadido para consistencia con otros archivos
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer: { // Añadido para consistencia con otros archivos
    padding: Spacing.medium,
    paddingTop: Spacing.large,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    alignItems: 'center',
  },
  screenTitle: { // Añadido para consistencia con otros archivos
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h2,
    color: Colors.black,
  },
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
    fontWeight: 'bold',
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
    color: Colors.black,
  },
  bodyText: {
    fontSize: FontSizes.body,
    fontFamily: Fonts.nunito,
    color: Colors.black,
  },
};