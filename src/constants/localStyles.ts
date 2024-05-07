import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: 'row'
  },
  justifyAlignCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  justifyAroundAlignCenter: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  justifySpaceAlignCenter: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  justifyEvenlyAlignCenter: {
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  marginTop24px: {
    marginTop: scale(24)
  }
});
