// src/admin/extensions/custom-page/index.js

export default {
  register(app) {
    app.createSettingSection({
      id: "custom-settings",
      title: "Custom Settings",
      asyncComponent: () => import("./components/CustomPage.js"), // Explicit file extension
    });
  },
};
