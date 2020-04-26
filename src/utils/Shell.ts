import iconv from 'iconv-lite';
import ChildProcess from 'child_process';
import {config} from "../config/config";
const exec = ChildProcess.exec;

interface ExecOptions {
    cwd?:string
}

export function execCmd(cmd:string, options?:ExecOptions) {
    return new Promise<string>((resolve, reject) => {
        console.log(`run command line in ${options.cwd || './'}: ${cmd}`);
        exec(cmd, Object.assign(options, {encoding: 'buffer'}),(error, stdout:Buffer, stderr:Buffer) => {
            if (error) {
                reject(iconv.decode(stderr, 'cp936'));
            }
            const stdout_return = iconv.decode(stdout, 'cp936');
            resolve(stdout_return.split('\r\n').slice(2).join('\n'));
        });
    });
}

export function execCmdInPyCLI(cmd:string) {
    return execCmd(`active_venv.bat & python cli.py ${cmd}`, {cwd: config.modelProjectDir})
}
