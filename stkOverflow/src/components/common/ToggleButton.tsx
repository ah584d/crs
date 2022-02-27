import React, { ReactElement, useEffect } from 'react';
import { Animated, Text, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
interface ToggleButtonProps {
  onToggleCallback(): void;
  isToggleOnRightSide: boolean;
  label?: string;
  altText: string;
  componentDimensions: ToggleSwitchDimensions;
  customContainerStyle?: ViewStyle;
  customLabelStyle?: TextStyle;
  disabled?: boolean;
}

interface ToggleSwitchDimensions {
  width: number;
  padding: number;
  circleWidth: number;
  circleHeight: number;
  translateX: number;
}

const offsetX = new Animated.Value(0);

export const ToggleButton = (props: ToggleButtonProps): ReactElement => {
  const { isToggleOnRightSide, onToggleCallback, componentDimensions, disabled = false } = props;

  const buttonBorderDimensions = {
    width: componentDimensions.circleWidth,
    height: componentDimensions.circleHeight,
    borderRadius: componentDimensions.circleWidth / 2,
  };

  const buttonDimensions = {
    width: componentDimensions.circleWidth - 1,
    height: componentDimensions.circleHeight - 1,
    borderRadius: componentDimensions.circleWidth / 2,
  };

  const buttonWrapperDimensions = {
    width: componentDimensions.width,
    padding: componentDimensions.padding,
  };

  const toValue = isToggleOnRightSide ? componentDimensions.width - componentDimensions.translateX : 0;

  useEffect(() => {
    Animated.timing(offsetX, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start();
  });

  const toggleAction = (): void => {
    onToggleCallback();
  };

  const renderToggleSwitchBackground = (): ReactElement => (
    <View style={styles.background}>
      <View style={styles.listIcon} />
    </View>
  );

  const renderToggleSwitchButton = (): ReactElement => (
    <Animated.View style={[styles.buttonBorder, buttonBorderDimensions, { transform: [{ translateX: offsetX }] }, { backgroundColor: Colors.white }]}>
      <Animated.View style={[styles.button, buttonDimensions, { backgroundColor: Colors.WHITE }]} />
    </Animated.View>
  );

  const renderToggleSwitch = (): ReactElement => {
    return (
      <TouchableOpacity
        testID={'ToggleSwitchID'}
        accessibilityRole = 'switch'
        accessibilityState={{ selected: isToggleOnRightSide }}
        accessibilityLabel={props.altText}
        style={[
          styles.buttonWrapper,
          buttonWrapperDimensions,
          {
            backgroundColor: isToggleOnRightSide ? Colors().ATT_BLUE : Colors().GREY,
          },
        ]}
        activeOpacity={1}
        disabled={disabled}
        onPress={toggleAction}>
        {renderToggleSwitchBackground()}
        {renderToggleSwitchButton()}
      </TouchableOpacity>
    );
  };

  const renderLabel = (): ReactElement => {
    return <Text style={[styles.labelStyle, { color: Colors.GREY_WHITE }, props.customLabelStyle]}>{props.label}</Text>;
  };

  return (
    <View style={[styles.container, props.customContainerStyle]}>
      {!!props.label && renderLabel()}
      {renderToggleSwitch()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  buttonWrapper: {
    justifyContent: 'center',
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    position: 'relative',
    shadowRadius: 2.5,
    elevation: 1.5,
  },
  buttonBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    position: 'absolute',
    shadowColor: Colors().ALWAYS_BLACK,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
  labelStyle: {
    fontSize: 14,
    marginRight: 16,
  },
  listIcon: {
    width: 14,
    height: 15,
    alignItems: 'flex-end',
  },
});
