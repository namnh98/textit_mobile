import { COLORS, FONTS } from '@/constants';
import { SCREEN_WIDTH, scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dotStyle: {
    width: scale(8),
    height: scale(8),
    backgroundColor: COLORS.SCAMPI,
    borderRadius: scale(8),
    marginHorizontal: scale(8)
  },
  containerDot: {
    position: undefined,
    marginTop: scale(40)
  },
  bottomWrapper: {
    paddingHorizontal: scale(16),
    marginTop: scale(16)
  },
  buttonCreateAccount: {
    width: SCREEN_WIDTH - scale(32),
    backgroundColor: COLORS.LINEAR,
    paddingVertical: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    marginBottom: scale(16)
  },
  titleButtonCreateAccount: {
    color: COLORS.WHITE,
    fontSize: scale(13),
    fontFamily: FONTS.MEDIUM
  },
  contentBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleBottom: {
    fontSize: scale(13),
    color: COLORS.BLACK_300,
    fontFamily: FONTS.REGULAR
  },
  titleButtonLogin: {
    fontSize: scale(13),
    color: COLORS.LINEAR,
    fontFamily: FONTS.MEDIUM
  },
  buttonLoginBottom: {}
});

export default styles;
