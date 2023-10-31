import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { initConnect } from "./config"; // Assuming you have a separate module for initConnect
import { BaseEntity } from "./base.entity";

async function loadRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Promise<Repository<T>> {
    const getConn = await initConnect();
    return getConn.getRepository(entity);
}

export function createBaseService<T extends BaseEntity>(getEntity: EntityTarget<T>): Promise<Repository<T>> {
    return loadRepository(getEntity);
}

