import axios from '@/utils/axios';
import { IGetFilesReturn } from '@/types/file';

/**
 * 获取文件目录
 */
export function getFiles() {
  return axios.get<any, IGetFilesReturn>('file/display');
}
