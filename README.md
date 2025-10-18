# 🚀 LssGoo Quick Start Guide

## Get Up and Running in 5 Minutes!

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: iOS Setup (macOS only)
```bash
cd ios
pod install
cd ..
```

### Step 3: Run the App

#### iOS (macOS only):
```bash
npm run ios
```

#### Android:
```bash
npm run android
```

### That's It! 🎉

The app should now be running on your simulator/emulator showing the Home Screen with:
- "Welcome to LssGoo" heading
- "Let's Go Explore" tagline

## 🔧 If Something Goes Wrong

### Metro Bundler Issues
```bash
npm start -- --reset-cache
```

### iOS Build Issues
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

### Android Build Issues
```bash
cd android
./gradlew clean
cd ..
```

### Can't Find Command
Make sure you're in the project root directory:
```bash
cd /Users/priyanshugour72/Desktop/lssgoo/LssGoo
```

## 📖 Next Steps

1. Read `PROJECT_SETUP.md` for complete documentation
2. Read `src/README.md` for code structure
3. Check `SETUP_COMPLETE.md` for what's been configured

## 💡 Development Tips

- **Hot Reload**: Shake device/press Cmd+D (iOS) or Cmd+M (Android) for dev menu
- **Fast Refresh**: Code changes auto-reload
- **Console Logs**: Show in Metro bundler terminal

## 📞 Need Help?

- Email: info@lssgoo.com
- Phone: +91-9098393937

---

**Happy Coding! 🚀**

