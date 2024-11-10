import "react-native";

export interface DeviceLocaleModuleInterface {
    getDeviceLocale: () => Promise<void>;
}

declare module "react-native" {
  interface DeviceLocaleModuleStatic {
    DeviceLocaleModule: DeviceLocaleModuleInterface;
  }
}