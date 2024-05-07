import { COLORS, FONTS } from '@/constants';
import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(16),
    paddingVertical: scale(28),
    backgroundColor: COLORS.WHITE
  },
  main: {
    flex: 1
  },
  contentTop: {
    marginTop: scale(24)
  },
  titleCreateAccount: {
    fontSize: scale(32),
    fontFamily: FONTS.MEDIUM,
    color: COLORS.LINEAR
  },
  subTitleCreateAccount: {
    fontSize: scale(16),
    fontFamily: FONTS.REGULAR,
    color: COLORS.LAVENDER_GRAY,
    marginTop: scale(4)
  },
  contentMiddle: {
    marginTop: scale(36)
  },
  mainContent: {
    flex: 1
  },
  wrapperInput: {
    borderWidth: scale(1),
    borderColor: COLORS.LINEAR,
    borderRadius: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    marginLeft: scale(8),
    marginBottom: scale(16)
  },
  input: {
    fontSize: scale(16),
    fontFamily: FONTS.REGULAR,
    width: '90%',
    color: COLORS.LINEAR
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: scale(16),
    borderRadius: scale(16),
    marginBottom: scale(12)
  },
  buttonSignUp: {
    backgroundColor: COLORS.HAITI
  },
  titleButtonSignUp: {
    fontSize: scale(16),
    lineHeight: scale(20),
    fontFamily: FONTS.SEMIBOLD,
    color: COLORS.WHITE
  },
  buttonGoogle: {
    backgroundColor: COLORS.SNOW_DRIFT,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleButtonGoogle: {
    fontSize: scale(16),
    lineHeight: scale(20),
    fontFamily: FONTS.SEMIBOLD,
    color: COLORS.LINEAR,
    marginLeft: scale(4)
  },
  buttonFacebook: {
    backgroundColor: COLORS.SNOW_DRIFT,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleButtonFacebook: {
    fontSize: scale(16),
    lineHeight: scale(20),
    fontFamily: FONTS.SEMIBOLD,
    color: COLORS.SAN_MARINO,
    marginLeft: scale(4)
  },
  buttonSignIn: {
    borderBottomColor: COLORS.SAN_MARINO,
    borderBottomWidth: scale(1),
    marginLeft: scale(2)
  },
  titleButtonSignIn: {
    fontSize: scale(14),
    lineHeight: scale(20),
    fontFamily: FONTS.REGULAR,
    color: COLORS.LINEAR
  },
  wrapperHaveAccount: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

export default styles;
