import { getFiles } from '@/services/file';
// import { TreeNode } from 'antd/es/tree-select';
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { IGetFilesReturn } from '@/types/file';

export interface GlobalModelState {
  files: any[];
  folders: any[];
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    updateFiles: Effect;
  };
  reducers: {
    updateState: Reducer<GlobalModelState>;
  };
}
const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    files: [], // 文件列表
    folders: [], // 文件夹列表
  },
  effects: {
    *updateFiles(action, { call, put }) {
      const res: IGetFilesReturn = yield call(getFiles);
      const { filesArray, foldersArray } = res.data.data;
      yield put({
        type: 'updateState',
        payload: {
          files: filesArray,
          folders: foldersArray,
        },
      });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default GlobalModel;
