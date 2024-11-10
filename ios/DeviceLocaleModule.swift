//
//  DeviceLocaleModule.swift
//  WalletApp
//
//  Created by julio on 09/11/24.
//

import Foundation
import React

@objc(DeviceLocale)
class DeviceLocale: NSObject {
  
  // Método exposto ao React Native para obter o idioma e região do dispositivo
  @objc
  func getDeviceLocale(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    let locale = Locale.current
    let language = locale.languageCode ?? "en" // Padrão para "en" se não estiver disponível
    let country = locale.regionCode ?? "US"    // Padrão para "US" se não estiver disponível
    let localeString = "\(language)-\(country)"
    resolve(localeString)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
