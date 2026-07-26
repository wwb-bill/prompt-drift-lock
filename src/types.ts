export interface PromptVersion{name:string;version:string;content:string;sha256:string;created:number;parent?:string;}
export interface DriftResult{name:string;drifted:boolean;before:string;after:string;diff:{added:number;removed:number;};}
export interface Lockfile{name:string;current:string;history:PromptVersion[];}