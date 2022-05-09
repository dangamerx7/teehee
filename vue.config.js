module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      outputDir: 'dist',
      builderOptions: {
        appId: 'com.solartweaks.launcher',
        productName: 'Dan Tweaks',
        win: {
          target: 'nsis',
          icon: 'build/icons/win/icon.ico',
          publisherName: 'Dan Tweaks',
          verifyUpdateCodeSignature: true,
        },
        nsis: {
          oneClick: true,
          perMachine: true,
          installerIcon: 'build/icons/win/icon.ico',
          uninstallerIcon: 'build/icons/win/icon.ico',
          installerHeaderIcon: 'build/icons/win/icon.ico',
          runAfterFinish: true,
        },
        linux: {
          target: 'AppImage',
          maintainer: 'Dan Tweaks',
          vendor: 'Dan Tweaks',
          icon: 'build/icons/linux/1024x1024.png',
          synopsis: 'Dan Tweaks',
          description: 'Solar Tweaks',
          category: 'Game',
        },
        mac: {
          category: 'Game',
          target: 'dmg',
          icon: 'build/icons/macos/icon.icns',
        },
      },
    },
  },
};
