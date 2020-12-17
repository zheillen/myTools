export interface IFolder {
  title: string;
  key: number;
  value: string;
  children?: IFolder[];
}

export interface displayFilesReturn {
  filesArray: IFolder[];
  foldersArray: IFolder[];
}
