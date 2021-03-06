
/* IMPORT */

import * as _ from 'lodash';
import * as absolute from 'absolute';
import * as findUp from 'find-up';
import * as path from 'path';
import * as vscode from 'vscode';

/* FOLDER */

const Folder = {

  getAllRootPaths () {

    const {workspaceFolders} = vscode.workspace;

    if ( !workspaceFolders ) return [];

    return workspaceFolders.map ( folder => folder.uri.fsPath );

  },

  getRootPath ( basePath? ) {

    const {workspaceFolders} = vscode.workspace;

    if ( !workspaceFolders ) return;

    const firstRootPath = workspaceFolders[0].uri.fsPath;

    if ( !basePath || !absolute ( basePath ) ) return firstRootPath;

    const rootPaths = workspaceFolders.map ( folder => folder.uri.fsPath ),
          sortedRootPaths = _.sortBy ( rootPaths, [path => path.length] ).reverse (); // In order to get the closest root

    return sortedRootPaths.find ( rootPath => basePath.startsWith ( rootPath ) );

  },

  async getWrapperPathOf ( rootPath, cwdPath, findPath ) {

    const foundPath = await findUp ( findPath, { cwd: cwdPath } );

    if ( foundPath ) {

      const wrapperPath = path.dirname ( foundPath );

      if ( wrapperPath.startsWith ( rootPath ) ) {

        return wrapperPath;

      }

    }

  }

};

/* EXPORT */

export default Folder;
