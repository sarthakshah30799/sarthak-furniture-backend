export const instagramConfig = {
  instagramApiUrl:
    process.env.INSTAGRAM_API_URL || "https://api.instagram.com/",
  instagramGraphApiUrl:
    process.env.INSTAGRAM_GARPH_API_URL || "https://graph.instagram.com/",
  appId: (process.env.INSTAGRAM_APP_ID || 1620453424986580) as number,
  redirectUrl:
    process.env.INSTAGRAM_REDIRECT_URL ||
    "https://sarthak-furniture-test.netlify.app/admin/chair/instagram",
  secretKey:
    process.env.INSTAGRAM_SECRET_KEY || "ff66a76754efd7318f166609534a1c04",
  scope: "user_profile,user_media",
  responseType: "code",
};
