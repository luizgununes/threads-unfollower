const buttons = document.querySelectorAll('div[tabindex]:not([tabindex="-1"])');

async function unfollowAll() {
  for (let button of buttons) {
    if (button.textContent.includes("Following")) {
      button.click();

      await new Promise((resolve) => setTimeout(resolve, 500));

      const modalButtons = document.querySelectorAll(
        'div[tabindex]:not([tabindex="-1"])'
      );

      for (let modalButton of modalButtons) {
        if (modalButton.textContent.includes("Unfollow")) {
          modalButton.click();
          break;
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
}

unfollowAll();
