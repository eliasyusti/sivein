import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { AppDataSource } from "./db";


function createPathEnv(path: string): string {
    const arrEnv: Array<string> = ["env"];

    if (path.length > 0) {
        const stringToArray = path.split(".");
        arrEnv.unshift(...stringToArray);
    }
    return "." + arrEnv.join(".");
}

function getEnvironment(k: string): string | undefined {
    return process.env[k];
}

function getNumberEnv(k: string): number {
    return Number(getEnvironment(k));
}

function getNodeEnv(): string {
    return getEnvironment("NODE_ENV")?.trim() || "";
}

async function initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
}

function ConfigServer() {
    const nodeNameEnv = createPathEnv(getNodeEnv());
    dotenv.config({
        path: nodeNameEnv,
    });
}

export {
    getEnvironment,
    getNumberEnv,
    getNodeEnv,
    initConnect,
    ConfigServer,
};
