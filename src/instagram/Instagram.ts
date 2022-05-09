import { instagramConfig } from "./instagram.config";
import fetch, { BodyInit } from "node-fetch";

export class Instagram {
  private _apiUrl: string = instagramConfig.instagramApiUrl;
  private _graphApiUrl: string = instagramConfig.instagramGraphApiUrl;
  private _appId: string = instagramConfig.appId;
  private _secretId: string = instagramConfig.secretKey;
  private _redirectUrl: string = instagramConfig.redirectUrl;

  async getAuthorizationToken(code: string) {
    try {
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

      const response = await fetch(`${this._apiUrl}`, {
        method: "POST",
        body: formData as BodyInit,
      });

      const responseData = response.body;
      const longLivedData = await this._getLongLivedToken(
        responseData["access_token"]
      );
      responseData["access_token"] = longLivedData["access_token"];
      return responseData;
    } catch (err) {
      console.error("Error while generating token", err);
      return err;
    }
  }

  private async _getLongLivedToken(shortLivedToken: string) {
    try {
      const params = {
        grant_type: "ig_refresh_token",
        access_token: shortLivedToken,
      };

      const response = await fetch(`${this._graphApiUrl}refresh_access_token`, {
        method: "GET",
        body: params as any,
      });
      const longLivedData = response.body;
      return longLivedData;
    } catch (err) {
      console.error("Error while generating long lived token", err);
    }
  }

  async getAllInstagramMedia(token: string) {
    const params = {
      fields: "id,media_url,media_type",
      access_token: token,
    };
    const response = await fetch(`${this._graphApiUrl}me/media`, {
      body: params as any,
    });

    const media = response.body;
    return media;
  }
}
