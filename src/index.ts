// Import the native module. On web, it will be resolved to ExpoDetectApp.web.ts
// and on native platforms to ExpoDetectApp.ts
import ExpoDetectAppModule from "./ExpoDetectAppModule";

export function detect(appName: string): boolean {
  return ExpoDetectAppModule.detect(appName);
}
