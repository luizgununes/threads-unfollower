# 🧵 Threads Unfollower

A simple JavaScript snippet to **automatically unfollow accounts on Threads** with just a few clicks.

## 🚀 Overview

This script automates the process of unfollowing users by:

- Clicking each **"Following"** button visible on the screen.
- Confirming the **"Unfollow"** action in the modal dialog.
- Repeating the process every 0.5 seconds (customizable).

Tested on **Google Chrome**, but should work on most Chromium-based browsers (e.g., **Edge**, **Brave**) and possibly **Firefox**.

## ⚙️ How to Use

1. Open **Google Chrome** and go to [Threads](https://www.threads.net).
2. Log in to your account.
3. Navigate to your **profile**.
4. Click on the **"Following"** tab to view accounts you follow.
5. **Scroll** down to load as many followed accounts as you'd like to unfollow.
6. Right-click anywhere on the page and select **"Inspect"** to open **DevTools**.
7. Go to the **Console** tab.
8. **Paste the script** into the console.
9. Press **Enter** to run the script.
10. Sit back and watch it unfollow accounts automatically.

## ⏱️ Customization

To change the interval between each unfollow action, edit this line in the script:

```js
await new Promise((resolve) => setTimeout(resolve, 500)); // ← Change 500 (milliseconds) to your preferred interval
```

## ⚠️ Disclaimer

- Use at your own risk.
- Threads may update their website, which could break the script.
- This is intended for educational and personal use only.
