import { Config } from "../types";
import * as fs from "fs";
import * as path from "path";

export const getConfigPath = (configDir: string) => {
  return path.join(configDir, "config.json");
};

export const getConfig = (configDir: string): Config => {
  const configPath = getConfigPath(configDir);

  if (!fs.existsSync(configDir)) return {};
  if (!fs.existsSync(configPath)) return {};

  const configContent = fs.readFileSync(configPath, "utf8");
  return JSON.parse(configContent) as Config;
};

export const setConfig = (configDir: string, config: Config) => {
  const configPath = getConfigPath(configDir);
  const newConfigContent = JSON.stringify(config, null, 2);

  if (!fs.existsSync(configDir)) fs.mkdirSync(configDir);

  fs.writeFileSync(configPath, newConfigContent, "utf8");
};

export const getToken = (configDir: string) => {
  const config = getConfig(configDir);
  return config.token || "";
};
