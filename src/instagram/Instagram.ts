import { instagramConfig } from "./instagram.config";
import axios from "axios";

const logme = (msg, ...rest) => {
  console.log(`[Instagram methods:]${msg}...`, ...rest);
};

export class Instagram {
  private _apiUrl: string = instagramConfig.instagramApiUrl;
  private _graphApiUrl: string = instagramConfig.instagramGraphApiUrl;
  private _appId: number = instagramConfig.appId;
  private _secretId: string = instagramConfig.secretKey;
  private _redirectUrl: string = instagramConfig.redirectUrl;

  async getAuthorizationToken(code: string) {
    try {
      logme("Getting shortLived token");
      const formData = new URLSearchParams();
      const params = {
        client_id: this._appId,
        client_secret: this._secretId,
        grant_type: "authorization_code",
        redirect_uri: this._redirectUrl,
        code,
      };

      for (const key in params) {
        formData.append(key, params[key]);
      }

      const response = await axios.post(
        `${this._apiUrl}oauth/access_token`,
        formData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      const responseData = response?.data;
      logme("shortLived token received");

      const longLivedData = await this._getLongLivedToken(
        responseData["access_token"]
      );

      responseData["access_token"] = longLivedData["access_token"];
      logme("Returns with longlived Token");

      return responseData;
    } catch (err) {
      console.error("Error while generating token", err.response.data);
      return null;
    }
  }

  private async _getLongLivedToken(shortLivedToken: string) {
    try {
      const params = {
        grant_type: "ig_exchange_token",
        client_secret: this._secretId,
        access_token: shortLivedToken,
      };
      logme("Getting longlived Token");
      const response = await axios.get(`${this._graphApiUrl}access_token`, {
        params,
      });
      const longLivedData = response.data;
      logme("longlived Token recieved");
      return longLivedData;
    } catch (err) {
      console.error("Error while generating long lived token", err);
    }
  }

  async getAllInstagramMedia(token: string) {
    try {
      const params = {
        fields: "id,media_url,media_type",
        access_token: token,
      };
      logme("Getting instagram media");
      const response = await axios.get(`${this._graphApiUrl}me/media`, {
        params,
      });
      logme("Fetched Instagram media");
      const media = response.data;
      return media;
    } catch (err) {
      logme("Error while getting media", err?.response?.data);
      return err?.response?.data;
    }
  }
}
