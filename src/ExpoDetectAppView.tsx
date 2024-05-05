import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoDetectAppViewProps } from './ExpoDetectApp.types';

const NativeView: React.ComponentType<ExpoDetectAppViewProps> =
  requireNativeViewManager('ExpoDetectApp');

export default function ExpoDetectAppView(props: ExpoDetectAppViewProps) {
  return <NativeView {...props} />;
}
