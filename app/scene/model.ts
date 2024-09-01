import { Frame, Observable } from '@nativescript/core';
import { Logger, Severity } from '~/utils/logger';

export interface IScene  {
    Show(): void;
    RequestNeededPermissions(): void;
}

export class Scene extends Observable implements IScene {
    #config: JSON;
    #gameConfig: JSON;

    title: string;
    contentHtml: string;
    nextButtonText: string;
    doneCallback: (success: boolean) => void;

    constructor(config: JSON, gameConfig: JSON, doneCB: (success: boolean) => void) {
        super();

        this.#config = config;
        this.#gameConfig = gameConfig;

        this.title = this.GetConfig('title');
        this.contentHtml = this.GetConfig('content-html');
        this.nextButtonText = this.GetConfig('next-button-text', "Következő");
        this.doneCallback = doneCB;
    }

    RequestNeededPermissions(): void {
    }

    Show() {
        console.log(`${this.#GetModuleName()}/main`);
        Frame.topmost().navigate({
            moduleName: "scene_trial_camera/main",
            context: { scene: this }
        });
    }

    ShowNext(success=true) {
        this.doneCallback(success);
    }

    /* helper methods */
    GetConfig(key: string, defaultValue?: any): any {
        return this.#GetJSONConfig(this.#config, key, defaultValue);
    }

    GetGameConfig(key: string, defaultValue?: any): any {
        return this.#GetJSONConfig(this.#gameConfig, key, defaultValue);
    }

    #GetJSONConfig(json: JSON, key: string, defaultValue?: any): any {
        let value = json[key];
        if (value === undefined)
        {
            if (defaultValue === null){
                Logger.Log(Severity.Warning, `"${key}" missing from config for scene with title "${this.title}", and no default value provided`);
                return null;
            }
            return defaultValue;
        }
        return value;
    }

    #GetModuleName(): string {
        return (this.constructor.name.replace(/(?<!^)(?=[A-Z])/g, '_')).toLowerCase();
    }
}