import ConfigFile from "./misc/ConfigFile";
import Path from 'node:path';
import {zipDBConfig} from "./global";

const APP_ROOT = Path.resolve(Path.dirname(__dirname));

let config: ConfigFile<zipDBConfig>;

export function getConfig(): ConfigFile<zipDBConfig> {
    if(config !== null){
        return config;
    }

    config = new ConfigFile<zipDBConfig>(Path.join(getAppStorageDir(), 'config.json'),
        {
            postgres: {
                port: 5432,
                host: "localhost",
                database: "zip_eu",

                password: "need2Change",
                username: "need2Change2",

                poolSize: 4,
                ssl: true
            },
            webserver: {
                host: "localhost",
                port: 3001
            }
        }
    )

    config.saveIfChanged();
    return config;
}

export function getAppStorageDir(): string {
    return Path.join(APP_ROOT, 'storage', Path.sep);
}