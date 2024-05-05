package expo.modules.detectapp

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.app.Activity

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoDetectAppModule : Module() {
  companion object {
    var activity: Activity? = null
  }

  override fun definition() = ModuleDefinition {
    Name("ExpoDetectApp")

    Function("detect") { appName: String ->
      detect(appName)
    }
  }

  private fun detect(appName: String): Boolean {
    val currActivity = activity

    if(currActivity == null) {
      return false;
    }

    try {
      val packageInfo = currActivity?.packageManager?.getPackageInfo(appName, 0)
      return true
    } catch (e: PackageManager.NameNotFoundException) {
      return false
    }
  }
}
