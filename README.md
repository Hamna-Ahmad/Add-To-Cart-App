# Shopping List App

This is a simple web application that allows you to create a shopping list. You can add items to the list and remove them by double-clicking on the item.

## Technologies Used

- Firebase Realtime Database
- HTML
- CSS
- JavaScript

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
2. Open the index.html file in your web browser.

3. Enter an item in the input field and click the "Add to cart" button to add it to the shopping list.

4. Double-click on an item in the shopping list to remove it.

## Firebase Configuration
To use the Firebase Realtime Database in this app, you need to configure it with your own Firebase project. Follow these steps:

1. Go to the Firebase Console and create a new project.

2. Get your Firebase project's configuration object by clicking on the "Web" option in the project settings.

3. Replace the placeholder Firebase configuration in the index.js file with your own configuration:

```bash
// Replace with your own Firebase configuration
const appSettings = {
    // ...
}
```
4. Make sure to enable the Realtime Database service in your Firebase project.
