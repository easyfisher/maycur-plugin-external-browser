#import "MCBrowser.h"
#import <Cordova/CDVPlugin.h>

@implementation MCBrowser

- (void)show:(CDVInvokedUrlCommand*)command {
    NSString *urlString = command.arguments[0];
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:urlString]];
}

@end
