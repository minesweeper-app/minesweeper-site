# Troubleshooting

This page collects common problems and how to resolve them.

## Application won't start or crashes on launch

Symptoms: Minesweeper does not open, crashes immediately, or shows an unexpected error.

Steps to try:

1. Ensure your device meets the minimum requirements (iOS/iPadOS 15+, macOS 15+).
2. Force-quit and relaunch the app.
3. Restart your device.
4. Reinstall the app from the App Store.
5. If problems persist, open an issue on the project repository with details.

## Performance issues

If the game is laggy or slow:

1. Close other heavy applications.
2. On Mac, check Activity Monitor for high CPU usage.
3. On older devices, try a smaller board size (Beginner difficulty).

## View logs

To troubleshoot crashes, application logs are useful. In sandboxed (App Store) builds on Mac, check:

```
~/Library/Containers/com.w3cub.minesweeper/Data/Library/Logs/minesweeper/minesweeper.log
```

On iOS/iPadOS, connect your device to a Mac and use Console.app to view logs, filtering by "Minesweeper".

## Resetting the app

To reset settings and clear local data (Mac):

1. Quit Minesweeper
2. Remove the container (careful — this deletes all settings and game data):

```bash
rm -rf ~/Library/Containers/com.w3cub.minesweeper
```

3. Reopen Minesweeper and reconfigure.

On iPhone/iPad, delete and reinstall the app to reset all data.

## Report an issue

When opening an issue, include:

- Device type (iPhone, iPad, or Mac)
- OS version (Settings → General → About)
- Minesweeper version (Settings → About)
- Steps to reproduce
- Logs or screenshots if available

This helps maintainers identify and fix the problem faster.
