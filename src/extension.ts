'use strict';
import * as vscode from 'vscode';
import { exec } from 'child_process';
import { workspace } from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.barbecueee', () => {

        let folders = workspace.workspaceFolders;
        let projectFolder = folders[0]['uri']['path'] 

        exec('cd ' + projectFolder + ' && git reset --hard && git clean -df');
        
        vscode.window.showInformationMessage('who wantz to be a burgerrr 🍔🔥');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}