import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoDetectApp.web.ts
// and on native platforms to ExpoDetectApp.ts
import ExpoDetectAppModule from './ExpoDetectAppModule';
import ExpoDetectAppView from './ExpoDetectAppView';
import { ChangeEventPayload, ExpoDetectAppViewProps } from './ExpoDetectApp.types';

// Get the native constant value.
export const PI = ExpoDetectAppModule.PI;

export function hello(): string {
  return ExpoDetectAppModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoDetectAppModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoDetectAppModule ?? NativeModulesProxy.ExpoDetectApp);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoDetectAppView, ExpoDetectAppViewProps, ChangeEventPayload };
