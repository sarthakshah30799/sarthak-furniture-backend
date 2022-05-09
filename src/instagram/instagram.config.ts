export const instagramConfig = {
  instagramApiUrl:
    process.env.INSTAGRAM_API_URL || "https://api.instagram.com/",
  instagramGraphApiUrl:
    process.env.INSTAGRAM_GARPH_API_URL || "https://graph.instagram.com/",
  appId: process.env.INSTAGRAM_APP_ID,
  redirectUrl: process.env.INSTAGRAM_REDIRECT_URL,
  secretKey: process.env.INSTAGRAM_SECRET_KEY,
  scope: "user_profile,user_media",
  responseType: "code",
};
