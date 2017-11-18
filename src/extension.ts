'use strict';
import * as vscode from 'vscode';
import { ShellExecution } from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.barbecueee', () => {

        // ShellExecution.apply('git reset --hard && git clean -df');
        // ShellExecution.apply('echo "test"');


        vscode.window.showInformationMessage('who wantz to be a burgerrr 🍔🔥');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}