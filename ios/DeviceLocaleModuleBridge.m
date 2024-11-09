//
//  DeviceLocaleModuleBridge.m
//  WalletApp
//
//  Created by julio on 09/11/24.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DeviceLocale, NSObject)
RCT_EXTERN_METHOD(getDeviceLocale:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
@end
