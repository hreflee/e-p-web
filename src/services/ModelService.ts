import {MethodDAO} from "../models";
import {execCmdInPyCLI} from "../utils/Shell";

export function fetchMethods() {
    (async () => {
        await MethodDAO.destroy({
            where: {},
            truncate: true
        });
        const fetchedMethods: string[][] = JSON.parse(await execCmdInPyCLI('reg-list')).map(([name, define]: [string, string]) => ({
            name,
            define
        }));
        MethodDAO.bulkCreate(fetchedMethods)
    })();
}