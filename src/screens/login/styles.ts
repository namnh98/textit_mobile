import { COLORS, FONTS } from '@/constants';
import { SCREEN_WIDTH, scale } from '@/utils';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: scale(16)
  },
  wrapperMain: {
    flex: 1
  },
  mainContent: {
    marginTop: scale(36),
    flex: 1
  },
  title: {
    fontSize: scale(32),
    color: COLORS.LINEAR,
    fontFamily: FONTS.SEMIBOLD,
    lineHeight: scale(40)
  },
  subTitle: {
    fontSize: scale(16),
    color: COLORS.LAVENDER_GRAY,
    fontFamily: FONTS.REGULAR,
    lineHeight: scale(24)
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    marginTop: scale(36),
    borderColor: COLORS.HAITI,
    borderWidth: scale(1),
    borderRadius: scale(4)
  },
  inputValue: {
    fontSize: scale(14),
    fontFamily: FONTS.REGULAR,
    color: COLORS.SCAMPI,
    lineHeight: scale(24),
    width: '100%',
    marginHorizontal: scale(8)
  },
  inputPassword: {
    width: '80%'
  },
  wrapperButtonForgotPassword: {
    marginTop: scale(16),
    marginBottom: scale(24),
    alignItems: 'flex-end'
  },
  titleForgotPassword: {
    fontSize: scale(12),
    fontFamily: FONTS.REGULAR,
    color: COLORS.SCAMPI,
    lineHeight: scale(18)
  },
  wrapperNotHaveAccount: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1
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
  buttonLogin: {
    backgroundColor: COLORS.HAITI
  },
  titleButtonLogin: {
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
  buttonSignUp: {
    borderBottomColor: COLORS.SAN_MARINO,
    borderBottomWidth: scale(1),
    marginLeft: scale(2)
  },
  titleButtonSignUp: {
    fontSize: scale(14),
    lineHeight: scale(20),
    fontFamily: FONTS.REGULAR,
    color: COLORS.LINEAR
  }
});

export default styles;
