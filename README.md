# nativescript libsodium

We want to see if libsodium js works on Android and benchmark  https://gitlab.com/burke-software/simple-asymmetric-js/blob/sodium/simple_asym/crypto.ts#L47


Right now, it won't load because of


```
objc[39115]: Class PLBuildVersion is implemented in both /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/System/Library/PrivateFrameworks/AssetsLibraryServices.framework/AssetsLibraryServices (0x124440998) and /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/System/Library/PrivateFrameworks/PhotoLibraryServices.framework/PhotoLibraryServices (0x124262880). One of the two will be used. Which one is undefined.
1   0x10c9047cb NativeScript::FFICallback<NativeScript::ObjCMethodCallback>::ffiClosureCallback(ffi_cif*, void*, void**, void*)
2   0x10cfd91ee ffi_closure_unix64_inner
3   0x10cfd9b22 ffi_closure_unix64
4   0x10dd09e70 -[UIViewController view]
5   0x10dbd34b5 -[UIWindow addRootViewControllerViewIfPossible]
6   0x10dbd3c06 -[UIWindow _setHidden:forced:]
7   0x10dbe7519 -[UIWindow makeKeyAndVisible]
8   0x10cfd997d ffi_call_unix64
9   0x1288f9190
file:///app/tns_modules/libsodium-sumo/dist/modules-sumo/libsodium-sumo.js:13:2119: JS ERROR ReferenceError: Can't find variable: print
Feb 27 18:50:01 Sauls-MBP com.apple.CoreSimulator.SimDevice.D4153CFB-2BB7-4B00-BEFD-F592475F3D11.launchd_sim[38678] (UIKitApplication:org.nativescript.libsodium[0xbacc][39115]): Service exited due to Segmentation fault: 11
```
