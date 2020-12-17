import { AxiosResponseReturn } from '@/types/global';
import { TreeNode } from 'antd/es/tree-select';

export type IGetFilesReturn = AxiosResponseReturn<IGetFilesReturnData>;

interface IGetFilesReturnData {
  filesArray: any[];
  foldersArray: any[];
}
