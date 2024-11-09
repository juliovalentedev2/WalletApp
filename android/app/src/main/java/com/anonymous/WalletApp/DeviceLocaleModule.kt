package com.anonymous.WalletApp

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.*

class DeviceLocaleModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "DeviceLocale"
    }

    @ReactMethod
    fun getDeviceLocale(promise: Promise) {
        try {
            val locale: Locale = Locale.getDefault()
            val language = locale.language // Ex: "en"
            val country = locale.country // Ex: "US"
            val localeString = "$language-$country"
            promise.resolve(localeString)
        } catch (e: Exception) {
            promise.reject("Error", e)
        }
    }
}
