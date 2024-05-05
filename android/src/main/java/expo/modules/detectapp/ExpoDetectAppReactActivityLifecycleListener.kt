package expo.modules.detectapp

import android.app.Activity
import android.os.Bundle
import expo.modules.core.interfaces.ReactActivityLifecycleListener

class ExpoDetectAppReactActivityLifecycleListener : ReactActivityLifecycleListener {
  override fun onCreate(activity: Activity, savedInstanceState: Bundle?) {
    // Your setup code in `Activity.onCreate`.
    ExpoDetectAppModule.activity = activity
  }
}