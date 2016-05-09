﻿namespace ts {
    export declare enum Comparison {
        LessThan,
        EqualTo,
        GreaterThan
    }

    export declare const enum Ternary {
        False,
        Maybe,
        True
    }

    export var Diagnostics: any;
    export declare const moduleFileExtensions: Array<string>

    export declare namespace Debug {
        export function fail(message?: string): void;
        export function assert(expression: boolean, message?: string, verboseDebugInfo?: () => string): void;
    }

    export interface ObjectAllocator {
        getNodeConstructor(kind: SyntaxKind): new () => Node;
        getSignatureConstructor(): new (checker: TypeChecker) => Signature;
        getSymbolConstructor(): new (flags: SymbolFlags, name: string) => Symbol;
        getTypeConstructor(): new (checker: TypeChecker, flags: TypeFlags) => Type;
    }

    export declare function isUrl(path: string);
    export declare let directorySeparator: string;
    export declare function isEmpty<T>(map: Map<T>);
    export declare function getBaseFileName(path: string);
    export declare function isRootedDiskPath(path: string);
    export declare function getDirectoryPath(path: string);
    export declare function lastOrUndefined<T>(array: T[]): T;
    export declare function getRootLength(path: string): number;
    export declare function normalizePath(path: string): string;
    export declare function addRange<T>(to: T[], from: T[]): void;
    export declare function memoize<T>(callback: () => T): () => T;
    export declare function lookUp<T>(map: Map<T>, key: string): T;
    export declare function normalizeSlashes(path: string): string;
    export declare function sum(array: any[], prop: string): number;
    export declare function indexOf<T>(array: T[], value: T): number;
    export declare function contains<T>(array: T[], value: T): boolean;
    export declare function combinePaths(path1: string, path2: string);
    export declare function copyListRemovingItem<T>(item: T, list: T[]);
    export declare function getProperty<T>(map: Map<T>, key: string): T;
    export declare function concatenate<T>(array1: T[], array2: T[]): T[];
    export declare function copyMap<T>(source: Map<T>, target: Map<T>): void;
    export declare function filter<T>(array: T[], f: (x: T) => boolean): T[];
    export declare function hasProperty<T>(map: Map<T>, key: string): boolean;
    export declare function fileExtensionIs(path: string, extension: string): boolean;
    export declare function getNormalizedPathFromPathComponents(pathComponents: string[]);
    export declare function forEachValue<T, U>(map: Map<T>, callback: (value: T) => U): U;
    export declare function createCompilerDiagnostic(message: DiagnosticMessage): Diagnostic;
    export declare function getNormalizedPathComponents(path: string, currentDirectory: string);
    export declare function getNormalizedAbsolutePath(fileName: string, currentDirectory: string);
    export declare function sortAndDeduplicateDiagnostics(diagnostics: Diagnostic[]): Diagnostic[];
    export declare function forEach<T, U>(array: T[], callback: (element: T, index: number) => U): U;
    export declare function rangeEquals<T>(array1: T[], array2: T[], pos: number, end: number): boolean; 
    export declare function createFileMap<T>(getCanonicalFileName: (fileName: string) => string): FileMap<T>;
    export declare function createCompilerDiagnostic(message: DiagnosticMessage, ...args: any[]): Diagnostic;
    export declare function map<U, T>(array: Array<T>, callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    export declare function chainDiagnosticMessages(details: DiagnosticMessageChain, message: DiagnosticMessage): DiagnosticMessageChain;
    export declare function createFileDiagnostic(file: SourceFile, start: number, length: number, message: DiagnosticMessage): Diagnostic;
    export declare function chainDiagnosticMessages(details: DiagnosticMessageChain, message: DiagnosticMessage, ...args: any[]): DiagnosticMessageChain;
    export declare function createFileDiagnostic(file: SourceFile, start: number, length: number, message: DiagnosticMessage, ...args: any[]): Diagnostic;
    export declare function concatenateDiagnosticMessageChains(headChain: DiagnosticMessageChain, tailChain: DiagnosticMessageChain): DiagnosticMessageChain;
    export declare function getRelativePathToDirectoryOrUrl(directoryPathOrUrl: string, relativeOrAbsolutePath: string, currentDirectory: string, getCanonicalFileName: (fileName: string) => string, isAbsolutePathAnUrl: boolean);
}